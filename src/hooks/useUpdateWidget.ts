import { updateWidgetVariable } from "@/utils";
import React, { SetStateAction, useEffect, useMemo, useState } from "react";

export function useUpdateWidget(
  widgetType: string,
  setWidgetType: React.Dispatch<SetStateAction<string>>
) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  async function handleUpdate() {
    if (!widgetType) return;
    setLoading(true);
    try {
      const widgetUpdatedVariableData = await updateWidgetVariable();
      setLoading(false);
      setWidgetType("");
      setData(widgetUpdatedVariableData.current[widgetType]);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("error getting the data from hook", error.message);
      }
    }
  }

  useEffect(() => {
    handleUpdate();
  }, [widgetType]);//it renders every time widgetType changes

  return { data, loading };
}
