import { cn } from "@/lib/utils";

interface IconProps {
  className?: string;
}

export function NivaLogo({ className }: IconProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/niva-logo-small.png" alt="Niva logo" className={cn("h-[75px] w-[100px] object-contain", className)} />
  );
}

export function CartIcon({ className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="826 826 140 140"
      className={cn("w-6 h-6 fill-current", className)}
    >
      <path d="M960.758,934.509l2.632,23.541c0.15,1.403-0.25,2.657-1.203,3.761c-0.953,1.053-2.156,1.579-3.61,1.579H833.424 c-1.454,0-2.657-0.526-3.61-1.579c-0.952-1.104-1.354-2.357-1.203-3.761l2.632-23.541H960.758z M953.763,871.405l6.468,58.29 H831.77l6.468-58.29H953.763z M922.807,867.592c-0.453,0-0.906-0.15-1.203-0.452l-21.462-21.462 c-0.653-0.653-0.653-1.754,0-2.407c0.653-0.653,1.754-0.653,2.407,0l21.462,21.462c0.653,0.653,0.653,1.754,0,2.407 C923.713,867.442,923.26,867.592,922.807,867.592z M869.194,867.592c-0.452,0-0.905-0.15-1.203-0.452 c-0.652-0.653-0.652-1.754,0-2.407l21.462-21.462c0.653-0.653,1.754-0.653,2.407,0c0.653,0.653,0.653,1.754,0,2.407 L870.398,867.14C870.099,867.442,869.647,867.592,869.194,867.592z" />
    </svg>
  );
}

export function AccountIcon({ className }: IconProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 120"
      className={cn("w-6 h-6 fill-current", className)}
    >
      <path d="M84.6,62c-14.1,12.3-35.1,12.3-49.2,0C16.1,71.4,3.8,91,3.8,112.5c0,2.1,1.7,3.8,3.8,3.8h105c2.1,0,3.8-1.7,3.8-3.8 C116.2,91,103.9,71.4,84.6,62z" />
      <circle cx="60" cy="33.8" r="30" />
    </svg>
  );
}

export function LeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("w-8 h-8", className)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3C7.5 3 3 7.5 3 12c0 4.5 4.5 9 9 9 0-4.5-4.5-9 0-9s9 4.5 9 0c0-4.5-4.5-9-9-9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18" />
    </svg>
  );
}

export function TruckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("w-8 h-8", className)}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
    </svg>
  );
}

export function TractorIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("w-8 h-8", className)}>
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="17" r="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 17V9l4-4h6l2 5 2 1v6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5v6h8" />
    </svg>
  );
}

export function AwardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={cn("w-8 h-8", className)}>
      <circle cx="12" cy="8" r="6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function RibbonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="white" className={cn("w-7 h-7", className)}>
      <path d="M12 2a4 4 0 100 8 4 4 0 000-8zM8.586 10.828A6 6 0 002 16v.5A1.5 1.5 0 003.5 18H8l-1.5 3 5.5-2 5.5 2L16 18h4.5A1.5 1.5 0 0022 16.5V16a6 6 0 00-6.586-5.172A5.98 5.98 0 0112 12a5.98 5.98 0 01-3.414-1.172z" />
    </svg>
  );
}

export function NaturalLeafIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="white" className={cn("w-7 h-7", className)}>
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 008 20C19 20 22 3 22 3c-1 2-8 2-11 0 0 0 0 0 0 0 1.122-.337 2.277-.5 3.426-.5 1.149 0 2.286.148 3.33.424A4.016 4.016 0 0121 8c0 2.21-1.79 4-4 4z" />
    </svg>
  );
}

export function PackageIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="white" className={cn("w-7 h-7", className)}>
      <path d="M20 7l-8-4-8 4v10l8 4 8-4V7zm-8 13.23l-6-3V9.12l6 3v8.11zm1-9.42l-6-3 6-3 6 3-6 3zm7 6.42l-6 3V10.12l6-3v10.11z" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("w-5 h-5", className)}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function TwitterIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("w-5 h-5", className)}>
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={cn("w-5 h-5", className)}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}
