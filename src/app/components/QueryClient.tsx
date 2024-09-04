'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: false,
    },
    mutations: {
      retryDelay: 2000,
    },
  },
})

export const ReactQueryClientProvider = ({
  children,
}: { children: React.ReactNode; }
) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
)


