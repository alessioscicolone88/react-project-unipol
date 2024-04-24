import { CustomEventHelper } from "./CustomEvent.helper";

export const SESSION_CUSTOM_EVENTS = {
  setDataInSession: "setDataInSession",
  getDataFromSession: "getDataFromSession",
  deleteDataInSession: "deleteDataInSession",
  deleteAllDataInSession: "deleteAllDataInSession",
};

export const SessionHelper = {
  subscribeSetDataInSession(
    listener: EventListenerOrEventListenerObject
  ): void {
    CustomEventHelper.subscribe(
      SESSION_CUSTOM_EVENTS.setDataInSession,
      listener
    );
  },

  subscribeGetDataFromSession(
    listener: EventListenerOrEventListenerObject
  ): void {
    CustomEventHelper.subscribe(
      SESSION_CUSTOM_EVENTS.getDataFromSession,
      listener
    );
  },

  subscribeDeleteDataInSession(
    listener: EventListenerOrEventListenerObject
  ): void {
    CustomEventHelper.subscribe(
      SESSION_CUSTOM_EVENTS.deleteDataInSession,
      listener
    );
  },

  subscribeDeleteAllDataInSession(
    listener: EventListenerOrEventListenerObject
  ): void {
    CustomEventHelper.subscribe(
      SESSION_CUSTOM_EVENTS.deleteAllDataInSession,
      listener
    );
  },

  unsubscribeSetDataInSession(
    listener: EventListenerOrEventListenerObject
  ): void {
    CustomEventHelper.unsubscribe(
      SESSION_CUSTOM_EVENTS.setDataInSession,
      listener
    );
  },

  unsubscribeGetDataFromSession(
    listener: EventListenerOrEventListenerObject
  ): void {
    CustomEventHelper.unsubscribe(
      SESSION_CUSTOM_EVENTS.getDataFromSession,
      listener
    );
  },

  unsubscribeDeleteDataInSession(
    listener: EventListenerOrEventListenerObject
  ): void {
    CustomEventHelper.unsubscribe(
      SESSION_CUSTOM_EVENTS.deleteDataInSession,
      listener
    );
  },

  unsubscribeDeleteAllDataInSession(
    listener: EventListenerOrEventListenerObject
  ): void {
    CustomEventHelper.unsubscribe(
      SESSION_CUSTOM_EVENTS.deleteAllDataInSession,
      listener
    );
  },

  setData(key: string, value: any): Promise<any> {
    return CustomEventHelper.publish(SESSION_CUSTOM_EVENTS.setDataInSession, {
      key,
      value,
    });
  },

  getData(key: string): Promise<any> {
    return CustomEventHelper.publish(SESSION_CUSTOM_EVENTS.getDataFromSession, {
      key,
    });
  },

  deleteData(key: string): Promise<any> {
    return CustomEventHelper.publish(
      SESSION_CUSTOM_EVENTS.deleteDataInSession,
      {
        key,
      }
    );
  },

  deleteAllData(): Promise<any> {
    return CustomEventHelper.publish(
      SESSION_CUSTOM_EVENTS.deleteAllDataInSession
    );
  },

  mock(store: any = {}) {
    const setDataListener = jest.fn(({ detail }) => {
      store[detail.key] = detail.value;
      detail.resolve(store);
    });
    this.subscribeSetDataInSession(setDataListener);

    const getDataListener = jest.fn(({ detail }) => {
      detail.resolve(store[detail.key]);
    });
    this.subscribeGetDataFromSession(getDataListener);

    const deleteDataListener = jest.fn(({ detail }) => {
      delete store[detail.key];
      detail.resolve(true);
    });
    this.subscribeDeleteDataInSession(deleteDataListener);
  },
};
