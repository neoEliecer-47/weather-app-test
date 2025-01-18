import { updateWidgetVariable } from "@/utils";
import { useEffect, useState } from "react";

export function useUpdateWidget(widgetType: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  async function handleUpdate() {
    //server handler route
    setLoading(true);
    try {
      const widgetUpdatedVariableData = await updateWidgetVariable();
      setData(widgetUpdatedVariableData.current[widgetType]);
      setLoading(false);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("error getting the data from hook", error.message);
      }
    }
  }

  useEffect(() => {
    handleUpdate();
  }, [widgetType]);

  return { data, loading };
}
