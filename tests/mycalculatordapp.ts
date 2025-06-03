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

    it("Add two numbers", async () => {
        await program.methods
            .add(new anchor.BN(2), new anchor.BN(3))
            .accounts({
                calculator: calculator.publicKey,
            })
            .rpc();

        const account = await program.account.calculator.fetch(calculator.publicKey);
        assert.ok(account.result.eq(new anchor.BN(5)));
        console.log("Result:", account.result.toString());
    });

    it("Multiply two numbers", async () => {
        await program.methods
            .multiply(new anchor.BN(2), new anchor.BN(3))
            .accounts({
                calculator: calculator.publicKey,
            })
            .rpc();

        const account = await program.account.calculator.fetch(calculator.publicKey);
        assert.ok(account.result.eq(new anchor.BN(6)));
        console.log("Result:", account.result.toString());
    });

    it("Divide two numbers", async () => {
        await program.methods
            .divide(new anchor.BN(4), new anchor.BN(2))
            .accounts({
                calculator: calculator.publicKey,
            })
            .rpc();

        const account = await program.account.calculator.fetch(calculator.publicKey);
        assert.ok(account.result.eq(new anchor.BN(2)));
        console.log("Result:", account.result.toString());
    });

    it("Subtract two numbers", async () => {
        await program.methods
            .subtract(new anchor.BN(2), new anchor.BN(3))
            .accounts({
                calculator: calculator.publicKey,
            })
            .rpc();

        const account = await program.account.calculator.fetch(calculator.publicKey);
        assert.ok(account.result.eq(new anchor.BN(-1)));
        console.log("Result:", account.result.toString());
    });
});