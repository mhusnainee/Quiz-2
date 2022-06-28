async function main()
{
  // Creating contract instance by attaching address to it
  console.log("Deploying contract ...");
  const Box = await ethers.getContractFactory("Box");

  const box = await Box.deploy();
  await box.deployed();
  console.log('Box deployed to:', box.address);

  const other = await Box.attach(box.address);
  console.log("Box is attached to :", box.address);

  // Interacting wih contract
  console.log("Interacting with contract...");
  await other.addDetails("Husnain", "Islamabad", 34302, 27101997, 34);
  await other.addDetails("Ali", "Lahore", 34302, 27101997, 35);
  console.log("User created and values saved...")

  console.log("Calling getDetailsById function...");
  const [name, address, cnic, dob, treeN] = await box.DetailsById(1);
  console.log('Person at ID 1 is ...', [name, address, cnic.toString(), dob.toString(), treeN.toString()]);

  const [n, a, c, d, t] = await box.DetailsById(2);
  console.log('Person at ID 2 is ...', [n, a, c.toString(), d.toString(), t.toString()]);

  console.log("Calling getAllDetail function...");
  const [_name, _address, _cnic, _dob, _treeN] = await box.getAllDetails.call();
  console.log('Person is', [_name, _address, _cnic, _dob, _treeN].toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
