export default {
  run: () => {
    console.log('\n\nGLOBAL MODULE\n')
    var x = 'global';
    let y = 1
    console.log(x);
    console.log(y);

    if (true) {
      console.log(x);
      console.log(y);
      x = 'block';
      y = 2;
      console.log(x);
      console.log(y);
    }

    console.log(x);
    console.log(y);

    function z () {
      console.log(x);
      console.log(y);
      x = 'function';
      y = 3;
      console.log(x);
      console.log(y);
    }

    z();

    console.log(x);
    console.log(y);
  }
};