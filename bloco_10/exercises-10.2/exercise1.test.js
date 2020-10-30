const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

it('uppercase', (done) => {
  uppercase('test', (str) => {
    expect(str).toBe('TEST');
    done();
  });
});
