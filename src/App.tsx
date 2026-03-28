import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { ThemeProvider, StudyProvider } from '@study-ui/components'
import { siteConfig } from './data/siteConfig'
import './data/challenges'
import CustomAppLayout from './components/layout/CustomAppLayout'
import Home from './pages/Home'

const CategoryPage = lazy(() => import('./pages/CategoryPage'))
const ChallengePage = lazy(() => import('./pages/ChallengePage'))
const ChallengeIndex = lazy(() => import('./pages/ChallengeIndex'))
const GuideNatureOfCode = lazy(() => import('./pages/GuideNatureOfCode'))
const GuideToyNeuralNetwork = lazy(() => import('./pages/GuideToyNeuralNetwork'))
const GuideTensorflow = lazy(() => import('./pages/GuideTensorflow'))
const GuidePerlinNoise = lazy(() => import('./pages/GuidePerlinNoise'))
const GuideChromeExtension = lazy(() => import('./pages/GuideChromeExtension'))
const Glossary = lazy(() => import('./pages/Glossary'))

function PageFallback() {
    return (
        <div className="flex items-center justify-center h-64 text-gray-400 dark:text-gray-600">
            <svg className="animate-spin w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            <span className="text-sm font-mono">Loading...</span>
        </div>
    )
}

export default function App() {
    return (
        <ThemeProvider>
            <StudyProvider config={siteConfig}>
                <BrowserRouter basename="/coding-train">
                    <Routes>
                        <Route element={<CustomAppLayout />}>
                            <Route index element={<Home />} />
                            <Route
                                element={
                                    <Suspense fallback={<PageFallback />}>
                                        <Outlet />
                                    </Suspense>
                                }
                            >
                                <Route path="category/:categoryId" element={<CategoryPage />} />
                                <Route path="challenge/:challengeId" element={<ChallengePage />} />
                                <Route path="challenges" element={<ChallengeIndex />} />
                                <Route path="guide/nature-of-code" element={<GuideNatureOfCode />} />
                                <Route path="guide/neural-network" element={<GuideToyNeuralNetwork />} />
                                <Route path="guide/tensorflow" element={<GuideTensorflow />} />
                                <Route path="guide/perlin-noise" element={<GuidePerlinNoise />} />
                                <Route path="guide/chrome-extension" element={<GuideChromeExtension />} />
                                <Route path="glossary" element={<Glossary />} />
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </StudyProvider>
        </ThemeProvider>
    )
}
