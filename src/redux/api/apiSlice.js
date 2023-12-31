import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pc-builder-backend-phi.vercel.app/api/v1' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => '/categories',
        }),
    }),
})

export const { useGetCategoriesQuery } = api