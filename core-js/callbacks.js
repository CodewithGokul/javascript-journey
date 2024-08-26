const end = () => {
  setTimeout(() => {
    console.log("Ok fine!");
  }, 2000);
};

const reply = (callback2) => {
  setTimeout(() => {
    console.log("Im fine");
    callback2();
  }, 1000);
};

const greet = (callback1) => {
  console.log("Hi,How are You?");
  callback1();
};

greet(()=>{
        reply(()=>{
                end()
        })
});
