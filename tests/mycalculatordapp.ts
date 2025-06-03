const assert = require("assert");
const anchor = require('@coral-xyz/anchor');
const { SystemProgram } = anchor.web3;

describe("mycalculatordapp", () => {
    // Configure the client to use the local cluster
    anchor.setProvider(anchor.AnchorProvider.env());
    const provider = anchor.getProvider();
    
    const calculator = anchor.web3.Keypair.generate();
    const program = anchor.workspace.Mycalculatordapp;

    it('Creates a calculator', async () => {
        await program.methods
            .create("Welcome to Solana")
            .accounts({
                calculator: calculator.publicKey,
                user: provider.wallet.publicKey,
                systemProgram: SystemProgram.programId,
            })
            .signers([calculator])
            .rpc();

        const account = await program.account.calculator.fetch(calculator.publicKey);
        assert.ok(account.greeting === "Welcome to Solana");
        console.log("Greeting:", account.greeting);
    });
});