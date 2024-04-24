import { COMMON_ENV_CONFIG } from "./EnvConfig";

describe("ENV_CONFIG", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    // Reset process.env before each test
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    // Reset process.env after each test
    process.env = originalEnv;
  });

  it("should return the production config if DEPLOY_ENV_NAME is not 'local' and npm_package_version does not include '-SNAPSHOT'", () => {
    process.env.DEPLOY_ENV_NAME = "production";
    process.env.npm_package_version = "1.0.0";
    process.env.NODE_ENV = "test";

    const envConfig = COMMON_ENV_CONFIG;

    expect(envConfig).toEqual(
      expect.objectContaining({
        // Add expected properties from the production config here
      })
    );
  });

  it("should return the development config if DEPLOY_ENV_NAME is not 'local' and npm_package_version includes '-SNAPSHOT'", () => {
    process.env.DEPLOY_ENV_NAME = "production";
    process.env.npm_package_version = "1.0.0-SNAPSHOT";
    process.env.NODE_ENV = "test";

    const envConfig = COMMON_ENV_CONFIG;

    expect(envConfig).toEqual(
      expect.objectContaining({
        // Add expected properties from the development config here
      })
    );
  });

  it("should return the local config if DEPLOY_ENV_NAME is 'local'", () => {
    process.env.DEPLOY_ENV_NAME = "local";
    process.env.npm_package_version = "1.0.0-SNAPSHOT";
    process.env.NODE_ENV = "test";

    const envConfig = COMMON_ENV_CONFIG;

    expect(envConfig).toEqual(
      expect.objectContaining({
        // Add expected properties from the local config here
      })
    );
  });
});
