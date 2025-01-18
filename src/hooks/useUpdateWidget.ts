import { updateWidgetVariable } from "@/utils";
import { useEffect, useMemo, useState } from "react";

export function useUpdateWidget(widgetType: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<string>("");

  async function handleUpdate() {
    if (!widgetType) return;
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

  useMemo(() => {//for better performance and avoid re-renders
    handleUpdate();
  }, [widgetType]);

  return { data, loading };
}
