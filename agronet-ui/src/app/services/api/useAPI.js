import { useQuery } from '@tanstack/react-query';
import { fetchAPI } from './fetchAPI';

export const useAPI = ({
  endpointKey,
  params = null,
  data = null,
  enabled = true,
}) => {
  // endpointKey should be one of the values from API_ENDPOINTS (e.g., API_ENDPOINTS.USERS)
  const endpoint = endpointKey;

  // Build a query key that uniquely identifies this request.
  const queryKey = [endpoint.url, params, endpoint.method];

  return useQuery({
    queryKey,
    queryFn: () =>
      fetchAPI({ url: endpoint.url, method: endpoint.method, params, data }),
    enabled, // Only execute the query if enabled is true
    staleTime: 5 * 60 * 1000, // Cache data for 5 minutes (adjust as needed)
  });
};
// Usage example:
// const { data, error, isLoading } = useAPI({
//   endpointKey: API_ENDPOINTS.USERS,
//   params: { id: 1 },
//   enabled: true,
// });
//
// In this example, the useAPI hook will fetch data from the USERS endpoint with the specified params.
// The data, error, and isLoading variables can be used to manage the state of the API request in your component.
//
// You can also use the useAPI hook to make POST requests by passing the data parameter.
// For example:
// const { data, error, isLoading } = useAPI({
//   endpointKey: API_ENDPOINTS.CREATE_USER,
//   data: { name: 'John Doe', email: '
//
