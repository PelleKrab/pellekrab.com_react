import React from 'react';
import { useNavigate } from 'react-router-dom';
import StarrySky from './StarrySky';

const EIP7702TechnicalDive: React.FC = () => {
    const navigate = useNavigate();
    return (
        <div className="relative flex flex-col items-center min-h-screen bg-black text-white font-courier">
            <StarrySky />
            <div className="absolute w-full h-full starry-sky z-0"></div>
            <div className="relative flex flex-col items-center w-full p-4 z-10">
                <button
                    className="absolute top-5 left-5 bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-300 hover:text-black transition-colors duration-200"
                    onClick={() => {
                        console.log("Button clicked");
                        navigate('/');
                    }}
                >
                    Back
                </button>
                <aside className="bg-white text-black p-12 rounded-xl shadow-lg max-w-3xl w-full text-center mb-8">
                    <h1 className="text-4xl font-bold mb-4">A Technical Dive into EIP-7702</h1>
                    <p>Exploring how EIP-7702 revolutionizes Ethereum usability.</p>
                </aside>
                <section className="bg-white text-black p-8 rounded-xl shadow-lg max-w-3xl w-full mb-8">
                    <article className="space-y-4">
                        <header className="mb-4">
                            <h2 className="text-3xl font-bold">Motivation</h2>
                        </header>
                        <p>Even as someone who grew up on Ethereum, I sometimes struggle with basic on-chain actions. For example, half the time on Uniswap, the transaction times out during one of the three times I have to switch to the MetaMask wallet for a simple swap. Onboarding new blockchain club members into Ethereum has also been cumbersome, even for people with computer science backgrounds.</p>
                        <p>This is likely to change within a year. The addition of EIP-7702 in the Pectra hardfork will enable a drastic shift in the capabilities of EOAs (Externally Owned Accounts), which currently can sign individual transactions. This upgrade will allow EOAs to bootstrap into functionality similar to smart contract wallets. A side effect of this change will be enabling apps to seamlessly support both EOAs and smart contract wallets without having to choose, as EOAs will be able to interact as if they were smart contract wallets.</p>
                        <header className="mb-4">
                            <h2 className="text-3xl font-bold">What is EIP-7702?</h2>
                        </header>
                        <p>At a high level, EIP-7702 allows EOAs to operate as smart contract wallets while retaining the ability to revert back to a "vanilla" EOA at any time. In simpler terms, EIP-7702 adds pointers to external code for EOAs, unlocking powerful new functionalities without fundamentally changing their nature.</p>
                        <header className="mb-4">
                            <h2 className="text-3xl font-bold">Transaction Schema</h2>
                        </header>
                        <p>EIP-7702 relies on a new EIP-2718 transaction type called SET_CODE. This new transaction type is specified in the Execution APIs repository. The schema is straightforward—it closely mirrors the schema for EIP-4844 (without the blob fields) while adding a new authorization_list tuple list. Each tuple in the list consists of six fields:</p>
                        <ul className="list-disc list-inside">
                            <li><strong>chainId:</strong> Specifies the chain. A chainId of 0 indicates authorization on all chains, though this doesn’t guarantee the same nonce across chains.</li>
                            <li><strong>nonce:</strong> Ensures each authorization is unique, prevents replay attacks, and enables revocation of an authorization.</li>
                            <li><strong>address:</strong> Defines the address to which authority is delegated.</li>
                            <li><strong>Signature Components:</strong></li>
                            <ul className="list-disc list-inside ml-6">
                                <li><strong>yParity:</strong> Specifies the parity (even or odd) of the elliptic curve point's y-coordinate.</li>
                                <li><strong>r:</strong> The x-coordinate of the elliptic curve point (R) used in the signature.</li>
                                <li><strong>s:</strong> A scalar value proving the message was signed with the sender's private key.</li>
                            </ul>
                        </ul>
                        <header className="mb-4">
                            <h2 className="text-3xl font-bold">Functionality</h2>
                        </header>
                        <header className="mb-2">
                            <h3 className="text-2xl font-bold">Sending Transactions</h3>
                        </header>
                        <p>To add these authorizations to an EOA, a SET_CODE transaction must be sent. This transaction can either be sent by the user or a bundler who adds the user’s authorization list to a SET_CODE transaction. This approach even allows new accounts with zero ETH balances to convert to smart contracts for free.</p>
                        <header className="mb-2">
                            <h3 className="text-2xl font-bold">Verifying Transactions</h3>
                        </header>
                        <p>For a transaction to be valid, it must pass these checks:</p>
                        <ul className="list-disc list-inside">
                            <li>Verify if chainId matches the chain or is set to 0.</li>
                            <li>Validate the signature to ensure the transaction’s authority is valid.</li>
                            <li>Ensure the authorization nonce matches the authority’s nonce.</li>
                            <li>Verify other relevant fields.</li>
                        </ul>
                        <p>It’s important to note that failure of an individual authorization in the list will not cause the entire transaction to fail. This design ensures that other authorizations in the list can still be processed.</p>
                        <p>If all checks are successful, the delegation is either added to the EOA’s account. The delegation is stored in the EOA as a Delegation Designator.</p>
                        <header className="mb-4">
                            <h2 className="text-3xl font-bold">Delegation Designator</h2>
                        </header>
                        <p>Upon successful transaction execution, a pointer to the new code is added to the account. Instead of embedding raw code in the EOA, which EIP-3607 restricts in order to prevent EOAs from pretending to be smart contracts, a Delegation Designator is used instead. Using a pointer provides more flexibility and ensures compliance with EOA limitations, allowing EOAs to function similarly to smart contract wallets without directly embedding code. This designator consists of a structured hexadecimal string:</p>
                        <p><strong>Example:</strong></p>
                        <p>0xef01006a78d82249C568cBFAA16adDDE43826567b042Bf</p>
                        <ul className="list-disc list-inside">
                            <li><strong>0–1 bytes (ef):</strong> Indicates “Executable Format” and is reserved for EOF-compatible contracts, as specified in EIP-3541.</li>
                            <li><strong>2–5 bytes (0100):</strong> Specifies the string as a 7702 Delegation Designator.</li>
                            <li><strong>6–25 bytes:</strong> The address where the EOA points to execute its designated code, or target address.</li>
                        </ul>
                        <header className="mb-4">
                            <h2 className="text-3xl font-bold">Gas Costs</h2>
                        </header>
                        <p>The transaction costs 25,000 gas for a new account that doesn’t yet exist in the state. If the account already exists, a refund of up to 12,500 gas is possible, based on the global refund mechanic. A maximum refund would require 62,500 gas or more to be spent. It’s worth noting that the sender will be charged for all authorizations in the list, even invalid or duplicate ones.</p>
                        <header className="mb-4">
                            <h2 className="text-3xl font-bold">Initializing Code</h2>
                        </header>
                        <p>To use an authorization, it must be initialized. This can be done at any time after posting the authorization by sending calldata to the account. The calldata serves as the initialization data.</p>
                        <p>Initialization is intentionally deferred to save calldata costs. Combining initialization with the creation of the Delegation Designator requires extra data calls, while separating them saves 5–10 bytes per call, helping to keep costs low.</p>
                        <p>An example of this init call could be a passkey like in Ithaca's experiment-0001, where an authorized WebAuthn key is passed and eventually allows the user to disregard their EOA keys and use the smart wallet with only their passkey.</p>
                        <header className="mb-4">
                            <h2 className="text-3xl font-bold">Revocation and Security in EIP-7702</h2>
                        </header>
                        <p>A pressing and valid concern with EIP-7702 is the possibility of a user accidentally delegating their EOA to a malicious actor. While there’s no protocol-level solution to prevent this (similar to private key misuse), an EOA can revoke an authorization at any time through one of two processes:</p>
                        <ul className="list-disc list-inside">
                            <li><strong>Replace the Authorization:</strong> Send a 7702 authorization with a new target and use the EOA's current nonce.</li>
                            <li><strong>Clear Delegations:</strong> Send a 7702 authorization with the target_address set to the zero/null address. This will completely clear the EOA of any delegations.</li>
                        </ul>
                        <p>These mechanisms ensure users retain full control over their EOAs.</p>
                        <header className="mb-4">
                            <h2 className="text-3xl font-bold">Conclusion</h2>
                        </header>
                        <p>EIP-7702 is an elegant solution that addresses many of the shortcomings of previous attempts at account abstraction and smart wallet migration schemes. While the change doesn’t technically add code to the user’s wallet, from their perspective, it behaves as if it does, massively improving the user experience. Prototypes like Ithaca-001 already demonstrate how impactful this change can be, paving the way for a seamless future of Ethereum UX.</p>
                        <header className="mb-4">
                            <h2 className="text-3xl font-bold">Resources</h2>
                        </header>
                        <ul className="list-disc list-inside">
                          <li><a className="text-blue-500 underline" href="https://ethereum-magicians.org/t/eip-7702-set-eoa-account-code/19923/1">EIP-7702 Set EOA Account Code Discussion</a></li>
                          <li><a className="text-blue-500 underline" href="https://github.com/ethereum/execution-apis/pull/575">Execution APIs Schema</a></li>
                          <li><a className="text-blue-500 underline" href="https://www.youtube.com/watch?v=QpafsHK15uY&list=PLaM7G4Llrb7yilk4qnKHJ0wentK2ZX1m3&index=3">Devcon Talk by lightclient (Timestamp 55:44)</a></li>
                          <li><a className="text-blue-500 underline" href="https://www.ithaca.xyz/writings/exp-0001">Ithaca Experiment-0001</a></li>
                          <li><a className="text-blue-500 underline" href="https://github.com/ethereum/EIPs">EIP Repository</a></li>
                        </ul>
                    </article>
                </section>
            </div>
        </div>
    );
};

export default EIP7702TechnicalDive;
