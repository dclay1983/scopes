export default {
  run: () => {
    console.log('\n\nFUNCTIONAL MODULE\n')

    const a = 'global';
    let b = 'global';

    function noChange () {
      console.log(a);
      console.log(b);
    }

    function change () {
      const a = 'functional';
      let b = 'functional';

      console.log(a);
      console.log(b);
    }

    console.log(a);
    console.log(b);

    noChange();
    change();

    console.log(a);
    console.log(b);
  }
};