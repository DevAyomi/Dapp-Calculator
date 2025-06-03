# 🧮 Solana Calculator DApp

A simple calculator decentralized application built on the Solana blockchain using the Anchor framework. This project demonstrates basic arithmetic operations (addition, subtraction, multiplication, division) stored permanently on-chain.

## 🌟 Features

- **On-chain Storage**: Calculator results are stored permanently on the Solana blockchain
- **Basic Arithmetic**: Supports addition, subtraction, multiplication, and division
- **Remainder Handling**: Automatically calculates and stores remainders for division operations
- **Personalized Messages**: Each calculator instance can store a custom greeting message
- **Anchor Framework**: Built using Anchor for simplified Solana development

## 🏗️ Architecture

### Smart Contract (Rust)
- **Program**: Core calculator logic with arithmetic operations
- **Account Structure**: Stores greeting message, calculation results, and remainders
- **Instructions**: Create calculator, add, subtract, multiply, divide

### Client (JavaScript/TypeScript)
- **Tests**: Comprehensive test suite using Anchor's testing framework
- **RPC Calls**: Interact with the on-chain program through RPC methods

## 🚀 Quick Start

### Prerequisites

- [Rust](https://rustup.rs/) (latest stable version)
- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools) (v1.16.0 or higher)
- [Anchor Framework](https://www.anchor-lang.com/docs/installation) (v0.28.0 or higher)
- [Node.js](https://nodejs.org/) (v16 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mycalculatordapp.git
   cd mycalculatordapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Solana for local development**
   ```bash
   # Set to localhost cluster
   solana config set --url localhost
   
   # Create a keypair if you don't have one
   solana-keygen new
   ```

4. **Start local Solana validator**
   ```bash
   solana-test-validator
   ```

### 🔧 Development

1. **Build the program**
   ```bash
   anchor build
   ```

2. **Deploy to local validator**
   ```bash
   anchor deploy
   ```

3. **Run tests**
   ```bash
   anchor test
   ```

## 📋 Available Operations

### Create Calculator
```javascript
await program.methods
  .create("Welcome to Solana")
  .accounts({
    calculator: calculator.publicKey,
    user: provider.wallet.publicKey,
    systemProgram: SystemProgram.programId,
  })
  .signers([calculator])
  .rpc();
```

### Addition
```javascript
await program.methods
  .add(num1, num2)
  .accounts({
    calculator: calculator.publicKey,
  })
  .rpc();
```

### Subtraction
```javascript
await program.methods
  .subtract(num1, num2)
  .accounts({
    calculator: calculator.publicKey,
  })
  .rpc();
```

### Multiplication
```javascript
await program.methods
  .multiply(num1, num2)
  .accounts({
    calculator: calculator.publicKey,
  })
  .rpc();
```

### Division
```javascript
await program.methods
  .divide(num1, num2)
  .accounts({
    calculator: calculator.publicKey,
  })
  .rpc();
```

## 📁 Project Structure

```
mycalculatordapp/
├── programs/
│   └── mycalculatordapp/
│       └── src/
│           └── lib.rs          # Main program logic
├── tests/
│   └── mycalculatordapp.ts     # Test suite
├── migrations/
│   └── deploy.js               # Deployment script
├── Anchor.toml                 # Anchor configuration
├── Cargo.toml                  # Rust dependencies
├── package.json                # Node.js dependencies
└── README.md
```

## 🧪 Testing

The project includes comprehensive tests for all calculator operations:

```bash
# Run all tests
anchor test

# Run tests with detailed output
anchor test --skip-deploy
```

**Test Coverage:**
- ✅ Calculator creation with custom greeting
- ✅ Addition operations
- ✅ Subtraction operations  
- ✅ Multiplication operations
- ✅ Division with remainder handling
- ✅ Account state persistence

## 🌐 Deployment

### Local Deployment
```bash
anchor build
anchor deploy
```

### Devnet Deployment
```bash
# Switch to devnet
solana config set --url devnet

# Request devnet SOL (for testing)
solana airdrop 2

# Deploy to devnet
anchor deploy
```

### Mainnet Deployment
```bash
# Switch to mainnet
solana config set --url mainnet-beta

# Deploy to mainnet (requires real SOL)
anchor deploy
```

## 💾 Data Structure

The calculator stores the following data on-chain:

```rust
pub struct Calculator {
    pub greeting: String,    // Custom message
    pub result: i64,         // Last calculation result
    pub remainder: i64,      // Remainder from division
}
```

## 🛠️ Built With

- **[Solana](https://solana.com/)** - High-performance blockchain
- **[Anchor](https://www.anchor-lang.com/)** - Solana development framework
- **[Rust](https://www.rust-lang.org/)** - Systems programming language
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Solana Documentation](https://docs.solana.com/) for comprehensive guides
- [Anchor Framework](https://www.anchor-lang.com/) for simplifying Solana development
- Solana community for support and resources

## 📞 Support

If you have any questions or need help:

- Open an issue in this repository
- Join the [Solana Discord](https://discord.gg/solana)
- Check out [Anchor Documentation](https://www.anchor-lang.com/docs)

---

**Built with ❤️ on Solana**
