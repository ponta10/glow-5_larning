import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "components/Elements/Spinner";
import PropTypes from "prop-types";
// import { AuthProvider } from "lib/auth";
import { QueryClient, QueryClientProvider } from "react-query";
import { SubmitButton } from "components/Elements/Button/SubmitButton";
import { Alert, AlertTitle } from "@mui/material";
import { SnackbarProvider } from "notistack";

function ErrorFallback() {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>エラーが発生しました。</AlertTitle>
      </Alert>
      <SubmitButton
        onClick={() => window.location.assign(window.location.origin)}
      >
        Refresh
      </SubmitButton>
    </div>
  );
}

export function AppProvider(props) {
  const { children } = props;

  const queryClient = new QueryClient();

  return (
    <React.Suspense fallback={<Spinner />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
                <SnackbarProvider
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  maxSnack={3}
                  autoHideDuration={1000}
                >
                  <Router>{children}</Router>
                </SnackbarProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element,
};

AppProvider.defaultProps = {
  children: null,
};
