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
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.35 3.43 16.84L2.05 22L7.31 20.62C8.75 21.41 10.36 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 9.27 20.92 6.83 19.05 4.95C17.17 3.08 14.73 2 12.04 2M16.57 15.31C16.31 15.18 15.14 14.6 14.91 14.51C14.68 14.42 14.5 14.38 14.32 14.64C14.14 14.9 13.68 15.42 13.5 15.6C13.32 15.78 13.14 15.82 12.88 15.69C12.62 15.56 11.79 15.29 10.76 14.36C10.02 13.72 9.5 12.93 9.32 12.67C9.14 12.41 9.25 12.28 9.37 12.16C9.48 12.04 9.61 11.88 9.73 11.74C9.83 11.62 9.87 11.53 9.96 11.35C10.05 11.17 10.01 11.02 9.92 10.84C9.83 10.66 9.37 9.5 9.19 9.04C9.01 8.58 8.82 8.67 8.68 8.67C8.54 8.67 8.36 8.67 8.18 8.67C8 8.67 7.7 8.76 7.48 8.99C7.26 9.21 6.77 9.67 6.77 10.7C6.77 11.73 7.51 12.72 7.63 12.89C7.75 13.06 9.24 15.42 11.53 16.32C12.14 16.58 12.61 16.71 12.98 16.83C13.56 17.01 14.08 16.97 14.5 16.9C14.97 16.82 16.14 16.22 16.4 15.96C16.66 15.7 16.66 15.44 16.57 15.31Z" />
    </svg>
  );
}
