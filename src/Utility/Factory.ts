type Constructible<
    Params extends readonly any[] = any[],
    T = any,
    > = new (...params: Params) => T;

class Factory {
    static create <T extends Constructible>(
        constructible: T,
        ...params: ConstructorParameters<T>
    ): InstanceType<T> {
        return new constructible(...params);
    }
}