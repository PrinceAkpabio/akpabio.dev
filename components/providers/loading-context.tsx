"use client";

import { createContext, useContext } from "react";

/** True while the loading screen is showing; flips to false at 100%. */
export const LoadingContext = createContext(true);

export const useLoading = () => useContext(LoadingContext);
