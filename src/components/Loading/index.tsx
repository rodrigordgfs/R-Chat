import { useContext } from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { SettingsContext } from "../../contexts/settings";

export function Loading({ children }: any) {
  const { loading } = useContext(SettingsContext);

  return (
    <LoadingOverlay active={loading} spinner text="Loading ...">
      {children}
    </LoadingOverlay>
  );
}
