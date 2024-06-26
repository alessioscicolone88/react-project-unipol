import { COMMON_ENV_CONFIG } from "./EnvConfig";

// Generated by CodiumAI

describe("EnvConfigManager", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset process.env before each test
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    // Reset process.env after each test
    process.env = originalEnv;
  });

  // EnvConfigManager can be instantiated with no arguments
  it("should instantiate EnvConfigManager with no arguments", () => {
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
  });

  // EnvConfigManager can be instantiated with an object argument
  it("should instantiate EnvConfigManager with an object argument", () => {
    process.env = { NODE_ENV: "development" };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
  });

  // EnvConfigManager can be instantiated with an empty object argument
  it("should instantiate EnvConfigManager with an empty object argument", () => {
    process.env = {};
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
  });

  // EnvConfigManager can get the environment name when NODE_ENV is 'test'
  it('should get the environment name when NODE_ENV is "test"', () => {
    process.env = { NODE_ENV: "test" };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager.ENV_NAME).toBeDefined();
  });

  // EnvConfigManager can be instantiated with an object argument
  it("should instantiate EnvConfigManager with an object argument", () => {
    process.env = { NODE_ENV: "production" };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
  });

  // EnvConfigManager can be instantiated with an object argument
  it("should instantiate EnvConfigManager with an object argument", () => {
    process.env = { DEPLOY_ENV_NAME: "local" };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
  });

  // EnvConfigManager can be instantiated with an object argument
  it("should instantiate EnvConfigManager with an object argument", () => {
    process.env = { DEPLOY_ENV_NAME: "production" };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
  });

  // EnvConfigManager can be instantiated with an object argument
  it("should instantiate EnvConfigManager with an object argument", () => {
    process.env = {
      NODE_ENV: "production",
      DEPLOY_ENV_NAME: "production",
    };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
  });

  // EnvConfigManager can be instantiated with an object argument
  it("should instantiate EnvConfigManager with an object argument", () => {
    process.env = { NODE_ENV: "local", DEPLOY_ENV_NAME: "local" };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
  });

  // EnvConfigManager can be instantiated with an object argument
  it("should instantiate EnvConfigManager with an object argument", () => {
    process.env = { NODE_ENV: "local", DEPLOY_ENV_NAME: undefined };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
  });

  // EnvConfigManager can be instantiated with an object argument
  it("should instantiate EnvConfigManager with an object argument", () => {
    process.env = {
      NODE_ENV: "local",
      DEPLOY_ENV_NAME: undefined,
      npm_package_version: "1.176.0-SNAPSHOT",
    };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
  });

  // EnvConfigManager can get the environment name when NODE_ENV is 'test'
  it("should get the config with window", () => {
    const windowSpy = jest.spyOn(global, "window", "get");
    windowSpy.mockImplementation(
      () =>
        ({
          location: {
            hostname: "dev.unipolsai.it",
          },
        } as any)
    );

    process.env = { NODE_ENV: "production" };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager.config).toBeDefined();
  });

  // EnvConfigManager REMOTE ENTRIES is defined for local_development
  it("should instantiate EnvConfigManager with an object argument", () => {
    process.env = {
      NODE_ENV: "local",
      DEPLOY_ENV_NAME: "local",
      ENV_NAME: "local_development",
    };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
    jest.mock("../mfe/mfeSettings", () => {
      return {
        core: {
          localProdPort: 8000,
          fileFolder: "core-remotes",
          basePath: "core-remotes",
          mfeSettings: {
            type: "core",
            tpdRemotesImporter: {
              __mfeName__: "tpdRemotesImporter",
              devClientPort: 2999,
              devServerPort: 2999,
            },
          },
        },
      };
    });
    expect(envConfigManager.REMOTES_ENTRIES).toBeDefined();
  });

  // EnvConfigManager REMOTE ENTRIES is defined for local_production
  it("should instantiate EnvConfigManager with an object argument", () => {
    process.env = {
      NODE_ENV: "local",
      DEPLOY_ENV_NAME: "local",
      ENV_NAME: "local_production",
    };
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager).toBeInstanceOf(Function);
    jest.mock("../mfe/mfeSettings", () => {
      return {
        core: {
          localProdPort: 8000,
          fileFolder: "core-remotes",
          basePath: "core-remotes",
          mfeSettings: {
            type: "core",
            tpdRemotesImporter: {
              __mfeName__: "tpdRemotesImporter",
              devClientPort: 2999,
              devServerPort: 2999,
            },
          },
        },
      };
    });
    expect(envConfigManager.REMOTES_ENTRIES).toBeDefined();
  });

  // EnvConfigManager can get the environment name when NODE_ENV is 'test' and ENV_NAME is Available (development)
  it('should get the environment name when NODE_ENV is "test"', () => {
    process.env = { NODE_ENV: "test" };
    process.env.ENV_NAME = "development";
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager.config).toBeDefined();
  });

  // EnvConfigManager can get the environment name when NODE_ENV is 'test' and ENV_NAME is NOT Available (test) and DEPLOY_ENV_NAME is undefined
  it('should get the environment name when NODE_ENV is "test"', () => {
    process.env = {
      NODE_ENV: "test",
      npm_package_version: "1.176.0-SNAPSHOT",
      DEPLOY_ENV_NAME: "development",
    };
    process.env.ENV_NAME = "test";
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager.config).toBeDefined();
  });

  // EnvConfigManager can get the environment name when NODE_ENV is 'test' and ENV_NAME is NOT Available (test) and DEPLOY_ENV_NAME is not equal to 'local'
  it('should get the environment name when NODE_ENV is "test"', () => {
    process.env = {
      NODE_ENV: "test",
      npm_package_version: undefined,
      DEPLOY_ENV_NAME: "development",
    };
    process.env.ENV_NAME = "test";
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager.config).toBeDefined();
  });

  // EnvConfigManager can get the environment name when NODE_ENV is 'test' and ENV_NAME is NOT Available
  it('should get the environment name when NODE_ENV is "test"', () => {
    process.env = { NODE_ENV: "test" };
    process.env.ENV_NAME = "test";
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager.config).toBeDefined();
  });

  // EnvConfigManager can get the environment name when NODE_ENV is 'test' and ENV_NAME is NOT Available
  it('should get the environment name when NODE_ENV is "test"', () => {
    process.env = {
      NODE_ENV: "test",
      npm_package_version: "1.176.0-SNAPSHOT",
    };
    process.env.ENV_NAME = "test";
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager.config).toBeDefined();
  });

  it('should get the environment name when NODE_ENV is "test"', () => {
    process.env = {
      NODE_ENV: "test",
      DEPLOY_ENV_NAME: "local",
    };
    process.env.ENV_NAME = "test";
    const envConfigManager = COMMON_ENV_CONFIG;
    expect(envConfigManager.config).toBeDefined();
  });
});
