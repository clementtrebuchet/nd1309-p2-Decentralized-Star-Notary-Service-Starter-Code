# Deploying the contract on rinkeby

check the contact on [EtherScan](https://rinkeby.etherscan.io/address/0x894a68a23A4d12638F90F8cA2cf21622C3d0F301)

```
[clementtrebuchet@clemozore nd1309-p2-Decentralized-Star-Notary-Service-Starter-Code]$  truffle migrate --reset --network rinkeby

Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Migrations dry-run (simulation)
===============================
> Network name:    'rinkeby-fork'
> Network id:      4
> Block gas limit: 30000000 (0x1c9c380)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > block number:        8902191
   > block timestamp:     1625770855
   > account:             0x818f4d82f08f8AF5652F974fD5f04deDB91c2DF9
   > balance:             18.6459782
   > gas used:            258196 (0x3f094)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00258196 ETH

   -------------------------------------
   > Total cost:          0.00258196 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > block number:        8902193
   > block timestamp:     1625770869
   > account:             0x818f4d82f08f8AF5652F974fD5f04deDB91c2DF9
   > balance:             18.61564675
   > gas used:            3005607 (0x2ddca7)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03005607 ETH

   -------------------------------------
   > Total cost:          0.03005607 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.03263803 ETH





Starting migrations...
======================
> Network name:    'rinkeby'
> Network id:      4
> Block gas limit: 29999972 (0x1c9c364)


1_initial_migration.js
======================

   Replacing 'Migrations'
   ----------------------
   > transaction hash:    0xd78da12298633410bacbf749c5d6e8f7def4e646dbd5d0a88fe7680ae550ba89
   > Blocks: 1            Seconds: 16
   > contract address:    0x894a68a23A4d12638F90F8cA2cf21622C3d0F301
   > block number:        8902193
   > block timestamp:     1625770892
   > account:             0x818f4d82f08f8AF5652F974fD5f04deDB91c2DF9
   > balance:             18.6458152
   > gas used:            274496 (0x43040)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.00274496 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00274496 ETH


2_deploy_contracts.js
=====================

   Deploying 'StarNotary'
   ----------------------
   > transaction hash:    0xac765c3580a5ec3c4227c2a38a3ab2559f4793612434461d0910cf1fc242a477
   > Blocks: 1            Seconds: 8
   > contract address:    0xdeD0E424b1A6dbC3Bf1D4a99Bb4Bc99aD98c0502
   > block number:        8902195
   > block timestamp:     1625770922
   > account:             0x818f4d82f08f8AF5652F974fD5f04deDB91c2DF9
   > balance:             18.61497375
   > gas used:            3038207 (0x2e5bff)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.03038207 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.03038207 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.03312703 ETH

```

### Testing the contract

```
truffle(develop)> test
Using network 'develop'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  ✓ can Create a Star (836ms)
  ✓ lets user1 put up their star for sale (659ms)
  ✓ lets user1 get the funds after the sale (1123ms)
  ✓ lets user2 buy a star, if it is put up for sale (905ms)
  ✓ lets user2 buy a star and decreases its balance in ether (958ms)
  ✓ can add the star name and star symbol properly (851ms)
  ✓ lets 2 users exchange stars (1761ms)
  ✓ lets a user transfer a star (1028ms)
  ✓ lookUptokenIdToStarInfo test (475ms)
  ✓ approveTransfer test (471ms)

  10 passing (9s)

```