export default {
  run: () => {
    console.log('\n\nBLOCK MODULE\n')
    var x = 'global';
    let y = 'global'
    console.log('x line 6', x);
    console.log('y line 7', y);

    if (true) {
      console.log('x line 10', x);
      // console.log('y line 11', y); // breaks due to hoisting in block scope
      var x = 'block';
      let y = 'block';
      console.log('x line 14', x);
      console.log('y line 15', y);
    }

    console.log('x line 18', x);
    console.log('y line 19', y);

    function z () {
      console.log('x line 22', x);
      // console.log('y line 23', y); // breaks due to hoisting in block scope
      var x = 'function';
      let y = 'function';
      console.log('x line 26', x);
      console.log('y line 27', y);
    }

    z();

    console.log('x line 32', x);
    console.log('y line 33', y);

  }
};