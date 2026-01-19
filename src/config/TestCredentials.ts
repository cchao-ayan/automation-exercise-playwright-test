function getEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Environment variable ${name} is not defined`);
    }
    return value;
}

export const testCredentials = {
    email: getEnv('TEST_EMAIL'),
    password: getEnv('TEST_PASSWORD'),
    name: getEnv('TEST_FIRST_NAME')
    
};
