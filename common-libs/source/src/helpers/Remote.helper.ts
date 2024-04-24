type TOptionSelectionValue = {
  selected: string;
  value: string;
};

type TElement = {
  value: TOptionSelectionValue[];
};

type TObjOverride = {
  [key: string]: string;
};

type TItem = {
  value: TItemValue;
};

type TItemValue = {
  value: string;
};

export const RemoteHelper = {
  getComponentPropsBy(contentProps: any = {}, pageProps: any = {}) {
    return {
      ...contentProps,
      __host__: {
        ...(contentProps.__host__ || {}),
        url: pageProps.url || "",
        pageProperties: pageProps.properties || {},
        datalayerInfo: pageProps.dataLayerGenericInfo || {},
        pageTitle: pageProps.title || "",
        profile: pageProps.profile || "",
      },
    };
  },

  getSelectedValue(config: Array<TOptionSelectionValue>): string {
    return config?.find((element) => element?.selected === "true")?.value || "";
  },
  getSelectedAllValues(config: Array<TOptionSelectionValue>): string[] {
    return (
      config
        ?.filter((element) => element?.selected === "true")
        ?.map((el) => el.value) || []
    );
  },
  extractValue(item: TItem) {
    return item.value.value;
  },
  dataFormatter(inputDate: string, singleDigitDate?: boolean): string {
    const dateFormatted = inputDate.substring(5, 16);

    const [day, month, year] = dateFormatted.split(" ");

    const monthMapping: { [key: string]: string } = {
      Jan: "gennaio",
      Feb: "febbraio",
      Mar: "marzo",
      Apr: "aprile",
      May: "maggio",
      Jun: "giugno",
      Jul: "luglio",
      Aug: "agosto",
      Sep: "settembre",
      Oct: "ottobre",
      Nov: "novembre",
      Dec: "dicembre",
    };

    const formattedMonth = monthMapping[month] || month;

    if (singleDigitDate) {
      return `${parseInt(day)} ${formattedMonth} ${year}`;
    }

    return `${day} ${formattedMonth} ${year}`;
  },

  getIconClassName(icon: TElement, overrideObj: TObjOverride = {}): string {
    const sectionName = this.getSelectedValue(icon["value"]);
    const iconName = overrideObj[sectionName]
      ? overrideObj[sectionName]
      : sectionName;
    const iconNameWithOutAccents = iconName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
    return "icon-" + iconNameWithOutAccents;
  },
  getIsPrimaryVisible(config: any, isEditMode: boolean): boolean {
    return (
      (config["VisualizzaWidget"]
        ? this.getSelectedValue(config["VisualizzaWidget"].value) !== "No"
        : true) || isEditMode
    );
  },

  getPrimaryRemoteContainerStyleData(config: any) {
    return {
      "data-margin-top": config["Margine Superiore"]
        ? this.getSelectedValue(config["Margine Superiore"].value)
        : "0px",
      "data-margin-bottom": config["Margine Inferiore"]
        ? this.getSelectedValue(config["Margine Inferiore"].value)
        : "0px",
      "data-intestazione": config["Intestazione"]
        ? this.getSelectedValue(config["Intestazione"].value)
        : "Versione classica",
    };
  },
};
