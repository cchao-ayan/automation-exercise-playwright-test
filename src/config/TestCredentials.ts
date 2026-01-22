function getEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Environment variable ${name} is not defined`);
    }
    return value;
}

export const testCredentials = {
    email1: getEnv('TEST_EMAIL1'),
    email2: getEnv('TEST_EMAIL2'),
    email3: getEnv('TEST_EMAIL3'),
    password: getEnv('TEST_PASSWORD'),
    name: getEnv('TEST_FIRST_NAME')
    
};
