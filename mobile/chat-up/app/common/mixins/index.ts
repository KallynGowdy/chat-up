
export function applyMixins(derivedCtor: any, baseCtors: any[]): void {
  baseCtors.forEach(ctor => {
    Object.getOwnPropertyNames(ctor.prototype).forEach(name => {
      derivedCtor.prototype[name] = ctor.prototype[name];
    });
  });
}
