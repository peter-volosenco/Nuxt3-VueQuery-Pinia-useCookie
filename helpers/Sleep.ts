export const Sleep = async (ms: number) => await new Promise((resolve) => setTimeout(resolve, ms));

const process1 = async () => {
    console.log('0');
    await Sleep(1000);
    console.log('1');
    await Sleep(1000);
    console.log('2');
    await Sleep(1000);
    console.log('3');
}

const process2 = async () => {
    console.log('a');
    await Sleep(1000);
    console.log('b');
    await Sleep(1000);
    console.log('c');
    await Sleep(1000);
    console.log('d');
}

//runs in parallel
// process1();
// process2();
