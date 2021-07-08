import Web3 from "web3";
import starNotaryArtifact from "../../build/contracts/StarNotary.json";

const App = {
  web3: null,
  account: null,
  meta: null,

  start: async function() {
    const { web3 } = this;

    try {
      // get contract instance
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = starNotaryArtifact.networks[networkId];
      this.meta = new web3.eth.Contract(
        starNotaryArtifact.abi,
        deployedNetwork.address,
      );

      // get accounts
      const accounts = await web3.eth.getAccounts();
      this.account = accounts[0];
    } catch (error) {
      console.error("Could not connect to contract or chain.");
    }
  },

  setStatus: function(message, element) {
    const status = document.getElementById(element);
    status.innerHTML = message;
  },

  createStar: async function() {
    const { createStar } = this.meta.methods;
    const name = document.getElementById("starName").value;
    const id = document.getElementById("starId").value;
    await createStar(name, id).send({from: this.account});
    App.setStatus("New Star Owner is " + this.account + ".");
  },

  // Implement Task 4 Modify the front end of the DAPP
  lookUp: async function (){
    const { lookUptokenIdToStarInfo } = this.meta.methods;
    // symbol and name are directly bound from the ECR721 contract interface
    // function name() public view virtual override returns (string memory) {
    //         return _name;
    //     }
    const { symbol } = this.meta.methods;
    const { name } = this.meta.methods;
    const startId = document.getElementById("lookid").value;
    const starName = await lookUptokenIdToStarInfo(parseInt(startId)).call();
    const _symbol = await symbol().call();
    const _name = await name().call();
    if (starName === "") {
        App.setStatus("No Star Found","status");
    } else {
       App.setStatus("Star Information ","status");
       App.setStatus("Star id: " + startId + " - Star Name: " + starName,"starNamed");
       App.setStatus("Token Name: " + _name, "tokenName");
       App.setStatus("Token Symbol: " + _symbol, "symbol");
    }
  }

};

window.App = App;

window.addEventListener("load", async function() {
  if (window.ethereum) {
    // use MetaMask's provider
    App.web3 = new Web3(window.ethereum);
    await window.ethereum.enable(); // get permission to access accounts
  } else {
    console.warn("No web3 detected. Falling back to http://127.0.0.1:9545. You should remove this fallback when you deploy live",);
    // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
    App.web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:9545"),);
  }

  App.start();
});