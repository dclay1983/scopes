export default {
  run: () => {
    console.log('\n\nLEXICAL MODULE\n')

    let a = 'global';
    let b = 'global';
    let c = 'global';

    function change () {
      let b = 'functional';
      let c = 'functional';

      function innerChange () {
        let c = 'lexical';

        console.log('Lexical a', a);
        console.log('Lexical b', b);
        console.log('Lexical c', c, '\n');
      }

      console.log('Functional a', a);
      console.log('Functional b', b);
      console.log('Functional c', c, '\n');

      innerChange();
    }

    console.log('Global a', a);
    console.log('Global b', b);
    console.log('Global c', c, '\n');

    change();

    console.log('Global a', a);
    console.log('Global b', b);
    console.log('Global c', c, '\n');
  }
};