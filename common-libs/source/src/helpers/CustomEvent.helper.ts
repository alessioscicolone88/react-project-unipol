import { EnvironmentHelper } from "./environment.helper";

export const CustomEventHelper = {
  subscribe(
    eventName: string,
    listener: EventListenerOrEventListenerObject
  ): void {
    if (EnvironmentHelper.isClientSide() && typeof document === "object") {
      document.addEventListener(eventName, listener);
    }
  },

  unsubscribe(
    eventName: string,
    listener: EventListenerOrEventListenerObject
  ): void {
    if (EnvironmentHelper.isClientSide() && typeof document === "object") {
      document.removeEventListener(eventName, listener);
    }
  },

  publish(eventName: string, data = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      if (EnvironmentHelper.isClientSide() && typeof document === "object") {
        const event = new CustomEvent(eventName, {
          detail: { resolve, reject, ...data },
        });
        document.dispatchEvent(event);
      } else {
        reject(
          "Error: CustomEventHelper.publish() is not available on server side."
        );
      }
    });
  },
};
