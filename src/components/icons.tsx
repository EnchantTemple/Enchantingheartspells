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

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        d="M16.6,14.2c-0.6-0.3-3.3-1.6-3.8-1.8c-0.5-0.2-0.9-0.3-1.2,0.3c-0.3,0.6-1.2,1.5-1.5,1.8c-0.3,0.3-0.6,0.3-1.1,0.1 c-0.5-0.2-2.1-0.8-4-2.5c-1.5-1.3-2.5-2.9-2.8-3.4c-0.3-0.5,0,0,0.2-0.2c0.2-0.2,0.5-0.6,0.7-0.8c0.2-0.2,0.3-0.5,0.5-0.8 c0.2-0.3,0.1-0.6,0-0.9C6.4,5.3,5.6,3.1,5.2,2.3c-0.4-0.8-0.8-0.7-1.1-0.7c-0.3,0-0.6,0-0.9,0c-0.3,0-0.8,0.1-1.2,0.5 c-0.4,0.4-1.5,1.5-1.5,3.6c0,2.1,1.6,4.2,1.8,4.5c0.2,0.3,3,4.6,7.2,6.4c1,0.4,1.8,0.7,2.4,0.9c0.8,0.2,1.5,0.2,2.1,0.1 c0.6-0.1,1.9-0.8,2.2-1.5c0.3-0.7,0.3-1.4,0.2-1.5C17.5,14.5,17.2,14.4,16.6,14.2z"
      />
    </svg>
  );
}
