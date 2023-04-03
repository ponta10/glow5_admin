import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router } from "react-router-dom";
import { Spinner } from "../component/Spinner";
import PropTypes from "prop-types";
import { AuthProvider } from '../lib/auth';
import { QueryClient, QueryClientProvider } from "react-query";
import { Alert, AlertTitle, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { CustomButton } from "../component/CustomButton";
import { theme } from '../component/layout/design';

function ErrorFallback() {
  return (
    <div>
      <Alert severity="error">
        <AlertTitle>エラーが発生しました。</AlertTitle>
      </Alert>
      <CustomButton
      title="Refresh"
        clickEvent={() => window.location.assign(window.location.origin)}
      />
    </div>
  );
}

export function AppProvider(props) {
  const { children } = props;

  const queryClient = new QueryClient();

  return (
    <Suspense fallback={<Spinner />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <AuthProvider>
              <ThemeProvider theme={theme}>
                <SnackbarProvider
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  maxSnack={3}
                  autoHideDuration={2000}
                >
                  <Router>{children}</Router>
                </SnackbarProvider>
              </ThemeProvider>
            </AuthProvider>
          </QueryClientProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </Suspense>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element,
};

AppProvider.defaultProps = {
  children: null,
};
