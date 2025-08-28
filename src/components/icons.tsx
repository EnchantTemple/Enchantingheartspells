import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      <path d="M12 8.5l1.5-3 1.5 3L18 4l-1.5 3L18 10l-3-1.5L12 10l-1.5-1.5L9 10l1.5-3L9 4l3 1.5z" />
    </svg>
  );
}

export function DmcaBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 72 36" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m63,18.001c0,3.708,-1.194,6.918,-3.582,9.63c-2.388,2.713,-5.61,4.069,-9.666,4.069c-3.129,0,-5.832,-0.921,-8.109,-2.763c-2.277,-1.842,-3.416,-4.23,-3.416,-7.164c0,-3.708,1.194,-6.918,3.582,-9.63c2.388,-2.713,5.61,-4.069,9.666,-4.069c3.129,0,5.832,0.921,8.109,2.763c2.277,1.842,3.416,4.23,3.416,7.164m-27,-18l-36,36l36,0l0,-36m-9,18.001c0,2.583,-0.831,4.824,-2.493,6.723c-1.662,1.899,-3.9,2.848,-6.714,2.848c-2.178,0,-4.065,-0.639,-5.658,-1.917c-1.593,-1.278,-2.39,-3.027,-2.39,-5.244c0,-2.583,0.831,-4.824,2.493,-6.723c1.662,-1.899,3.9,-2.848,6.714,-2.848c2.178,0,4.065,0.639,5.658,1.917c1.593,1.278,2.39,3.027,2.39,5.244"
        fill="#483D8B"
        fillRule="nonzero"
      ></path>
    </svg>
  );
}

export function GoogleSafeBrowsingBadge(props: SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground" {...props}>
       <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        <path d="m9 12 2 2 4-4"></path>
       </svg>
       <span>Google Safe Browsing Verified</span>
    </div>
  );
}