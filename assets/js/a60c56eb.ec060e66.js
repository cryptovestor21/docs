"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[649],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8561:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=["components"],r={},s="Celestia App Network Instantiation Guide",p={unversionedId:"developers/instantiate-testnet",id:"developers/instantiate-testnet",title:"Celestia App Network Instantiation Guide",description:"This guide is for helping instantiate a new testnetwork and following the",source:"@site/docs/developers/instantiate-testnet.md",sourceDirName:"developers",slug:"/developers/instantiate-testnet",permalink:"/developers/instantiate-testnet",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/developers/instantiate-testnet.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Celestia Node API Docs",permalink:"/developers/node-api"}},d={},u=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Setup Dependencies",id:"setup-dependencies",level:2},{value:"Install Golang",id:"install-golang",level:3},{value:"Installation",id:"installation",level:2},{value:"Spin Up A Celestia Testnet",id:"spin-up-a-celestia-testnet",level:2},{value:"Optional: Reset Working Directory",id:"optional-reset-working-directory",level:3},{value:"Initialize A Working Directory",id:"initialize-a-working-directory",level:3},{value:"Create A New Key",id:"create-a-new-key",level:3},{value:"Add Genesis Account KeyName",id:"add-genesis-account-keyname",level:3},{value:"Optional: Adding Other Validators",id:"optional-adding-other-validators",level:3},{value:"Create the Genesis Transaction For New Chain",id:"create-the-genesis-transaction-for-new-chain",level:3},{value:"Creating the Genesis JSON File",id:"creating-the-genesis-json-file",level:3},{value:"Modify Your Config File",id:"modify-your-config-file",level:3},{value:"Instantiate the Network",id:"instantiate-the-network",level:3}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"celestia-app-network-instantiation-guide"},"Celestia App Network Instantiation Guide"),(0,o.kt)("p",null,"This guide is for helping instantiate a new testnetwork and following the\ncorrect steps to do so with Celestia-App. You should only follow this guide\nif you want to experiment with your own Celestia Testnetwork or if you want\nto test out new features to build as a core developer."),(0,o.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,o.kt)("p",null,"The following hardware minimum requirements are recommended for running the\nvalidator node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Memory: 8 GB RAM"),(0,o.kt)("li",{parentName:"ul"},"CPU: Quad-Core"),(0,o.kt)("li",{parentName:"ul"},"Disk: 250 GB SSD Storage"),(0,o.kt)("li",{parentName:"ul"},"Bandwidth: 1 Gbps for Download/100 Mbps for Upload")),(0,o.kt)("h2",{id:"setup-dependencies"},"Setup Dependencies"),(0,o.kt)("p",null,"The following tutorial is done on an Ubuntu Linux 20.04 (LTS) x64\ninstance machine."),(0,o.kt)("p",null,"Once you have setup your instance, ssh into the instance to begin setting up\nthe box with all the needed dependencies in order to run your bridge node."),(0,o.kt)("p",null,"First, make sure to update and upgrade the OS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update && sudo apt upgrade -y\n")),(0,o.kt)("p",null,"These are essential packages that are necessary to execute many tasks like\ndownloading files, compiling and monitoring the node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install curl tar wget clang pkg-config libssl-dev jq \\\nbuild-essential git make ncdu -y\n")),(0,o.kt)("h3",{id:"install-golang"},"Install Golang"),(0,o.kt)("p",null,"Golang will be installed on this machine in order for us to be able to build\nthe necessary binaries for running the bridge node. For Golang specifically,\nit is needed to be able to compile Celestia Application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'ver="1.17.2"\ncd $HOME\nwget "https://golang.org/dl/go$ver.linux-amd64.tar.gz"\nsudo rm -rf /usr/local/go\nsudo tar -C /usr/local -xzf "go$ver.linux-amd64.tar.gz"\nrm "go$ver.linux-amd64.tar.gz"\n')),(0,o.kt)("p",null,"Now we need to add the ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/go/bin")," directory to ",(0,o.kt)("inlineCode",{parentName:"p"},"$PATH"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo 'export PATH=$PATH:/usr/local/go/bin:$HOME/go/bin' >> $HOME/.bash_profile\nsource $HOME/.bash_profile\n")),(0,o.kt)("p",null,"To check if Go was installed correctly run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"go version\n")),(0,o.kt)("p",null,"Output should be the version installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"go version go1.17.2 linux/amd64\n")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Run the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd $HOME\ngit clone https://github.com/celestiaorg/celestia-app.git\ncd celestia-app/\nAPP_VERSION=$(curl -s \\\n  https://api.github.com/repos/celestiaorg/celestia-app/releases/latest \\\n  | jq -r ".tag_name")\ngit checkout tags/$APP_VERSION -b $APP_VERSION\nmake install\n')),(0,o.kt)("p",null,"To check if the binary was successfully compiled you can run the binary\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," flag:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd --help\n")),(0,o.kt)("p",null,"You should see a similar output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'Stargate CosmosHub App\n\nUsage:\n  celestia-appd [command]\n\nAvailable Commands:\n*\n*\n*\nUse "celestia-appd [command] --help" for more information about a command.\n')),(0,o.kt)("h2",{id:"spin-up-a-celestia-testnet"},"Spin Up A Celestia Testnet"),(0,o.kt)("p",null,"If you want to spin up a quick testnet with your friends, you can follow these steps.\nUnless otherwise noted, every step must be done by everyone who wants to\nparticipate in this testnet."),(0,o.kt)("h3",{id:"optional-reset-working-directory"},"Optional: Reset Working Directory"),(0,o.kt)("p",null,"If you have already initialized a working directory for ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia-appd")," in the past,\nyou must clean up before reinitializing a new directory. You can do so by running\nthe following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd unsafe-reset-all\n")),(0,o.kt)("h3",{id:"initialize-a-working-directory"},"Initialize A Working Directory"),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"VALIDATOR_NAME=validator1\nCHAIN_ID=testnet\ncelestia-appd init $VALIDATOR_NAME --chain-id $CHAIN_ID\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The value we will use for ",(0,o.kt)("inlineCode",{parentName:"li"},"$VALIDATOR_NAME")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"validator1")," but you should choose\nyour own node name."),(0,o.kt)("li",{parentName:"ul"},"The value we will use for ",(0,o.kt)("inlineCode",{parentName:"li"},"$CHAIN_ID")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"testnet"),". The ",(0,o.kt)("inlineCode",{parentName:"li"},"$CHAIN_ID")," must\nremain the same for everyone participating in this network.")),(0,o.kt)("h3",{id:"create-a-new-key"},"Create A New Key"),(0,o.kt)("p",null,"Next, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"KEY_NAME=validator\ncelestia-appd keys add $KEY_NAME --keyring-backend test\n")),(0,o.kt)("p",null,"This will create a new key, with a name of your choosing.\nSave the output of this command somewhere; you'll need\nthe address generated here later. Here, we set the value of our\nkey ",(0,o.kt)("inlineCode",{parentName:"p"},"$KEY_NAME")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"validator")," for demonstration."),(0,o.kt)("h3",{id:"add-genesis-account-keyname"},"Add Genesis Account KeyName"),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'CELES_AMOUNT="10000000000000000000000000utia"\ncelestia-appd add-genesis-account $KEY_NAME $CELES_AMOUNT --keyring-backend test\n')),(0,o.kt)("p",null,"Here ",(0,o.kt)("inlineCode",{parentName:"p"},"$VALIDATOR_NAME")," is the same key name as before; and ",(0,o.kt)("inlineCode",{parentName:"p"},"$AMOUNT"),"\nis something like ",(0,o.kt)("inlineCode",{parentName:"p"},"10000000000000000000000000utia"),"."),(0,o.kt)("h3",{id:"optional-adding-other-validators"},"Optional: Adding Other Validators"),(0,o.kt)("p",null,"If other participants in your testnet also want to be validators,\nrepeat the command above with the specific amount for their public keys."),(0,o.kt)("p",null,"Once all the validators are added, the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file is created. You need\nto share it with all other validators in your testnet in order for everyone to\nproceed with the following step."),(0,o.kt)("p",null,"You can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," at ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-appd/config/genesis.json")),(0,o.kt)("h3",{id:"create-the-genesis-transaction-for-new-chain"},"Create the Genesis Transaction For New Chain"),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"STAKING_AMOUNT=1000000000utia\ncelestia-appd gentx $KEY_NAME $STAKING_AMOUNT --chain-id $CHAIN_ID \\\n  --keyring-backend test\n")),(0,o.kt)("p",null,"This will create the genesis transaction for your new chain.\nHere ",(0,o.kt)("inlineCode",{parentName:"p"},"$STAKING_AMOUNT")," should be at least ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000000utia"),". If you\nprovide too much or too little, you will encounter an error\nwhen starting your node."),(0,o.kt)("p",null,"You will find the generated gentx JSON file inside ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/gentx/gentx-$KEY_NAME.json")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If you have other validators in your network, they need to also\nrun the above command with the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file you shared with\nthem in the previous step.")),(0,o.kt)("h3",{id:"creating-the-genesis-json-file"},"Creating the Genesis JSON File"),(0,o.kt)("p",null,"Once all participants have submitted their gentx JSON files to you,\nyou will pull all those gentx files inside the following directory:\n",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-appd/config/gentx")," and use them to create the final\n",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file."),(0,o.kt)("p",null,"Once you added the gentx files of all the particpants, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd collect-gentxs \n")),(0,o.kt)("p",null,"This command will look for the gentx files in this repo which should\nbe moved to the following directory ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/gentx"),"."),(0,o.kt)("p",null,"It will update the ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file after in this location\n",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/genesis.json")," which now includes the gentx\nof other participants."),(0,o.kt)("p",null,"You should then share this final ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file with all the\nother particpants who must add it to their ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config")," directory."),(0,o.kt)("p",null,"Everyone must ensure that they replace their existing ",(0,o.kt)("inlineCode",{parentName:"p"},"genesis.json")," file with\nthis new one created."),(0,o.kt)("h3",{id:"modify-your-config-file"},"Modify Your Config File"),(0,o.kt)("p",null,"Open the following file ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.celestia-app/config/config.toml")," to modify it."),(0,o.kt)("p",null,"Inside the file, add the other participants by modifying the following line to\ninclude other participants as persistent peers:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'# Comma separated list of nodes to keep persistent connections to\npersistent_peers = "[validator_address]@[ip_address]:[port],[validator_address]@[ip_address]:[port]"\n')),(0,o.kt)("p",null,"You can find ",(0,o.kt)("inlineCode",{parentName:"p"},"validator_address")," by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd tendermint show-node-id\n")),(0,o.kt)("p",null,"The output will be the hex-encoded ",(0,o.kt)("inlineCode",{parentName:"p"},"validator_address"),". The default ",(0,o.kt)("inlineCode",{parentName:"p"},"port")," is 26656."),(0,o.kt)("h3",{id:"instantiate-the-network"},"Instantiate the Network"),(0,o.kt)("p",null,"You can start your node by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"celestia-appd start\n")),(0,o.kt)("p",null,"Now you have a new Celestia Testnet to play around with!"))}h.isMDXComponent=!0}}]);