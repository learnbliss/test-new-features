import {RefObject, useEffect, useRef, useState} from "react";

interface IntersectionOptions extends IntersectionObserverInit {
}

export default function useOnScreen(ref: RefObject<HTMLElement>, options: IntersectionOptions): boolean {
    const observerRef = useRef<IntersectionObserver>();
    const [isOnScreen, setIsOnScreen] = useState(false);
    useEffect(() => {
        observerRef.current = new IntersectionObserver(([entry]) => {
            setIsOnScreen(entry.isIntersecting)
        }, options)
        ref.current && observerRef.current.observe(ref.current);
        return () => {
            ref.current && observerRef.current?.unobserve(ref.current);
        };
    }, [ref, options]);
    return isOnScreen;
}
