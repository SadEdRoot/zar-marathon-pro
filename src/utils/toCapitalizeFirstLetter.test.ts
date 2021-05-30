import toCapitalizeFirstLetter from "./toCapitalizeFirstLetter";


describe('toCapitalizeFirstLetter', () => {
  test('some String => Some string', ()=>{
    const text = toCapitalizeFirstLetter('some String');

    expect(text).toEqual('Some string');
  })

  test('"" => ""', ()=>{
    const text = toCapitalizeFirstLetter('');

    expect(text).toEqual('');
  })

  test('s => S', ()=>{
    const text = toCapitalizeFirstLetter('s');

    expect(text).toEqual('S');
  })

  test('S => S', ()=>{
    const text = toCapitalizeFirstLetter('S');

    expect(text).toEqual('S');
  })

  test('SOME STRING => Some string', ()=>{
    const text = toCapitalizeFirstLetter('SOME STRING');

    expect(text).toEqual('Some string');
  })

  test('some string => Some string', ()=>{
    const text = toCapitalizeFirstLetter('SOME STRING');

    expect(text).toEqual('Some string');
  })
})
