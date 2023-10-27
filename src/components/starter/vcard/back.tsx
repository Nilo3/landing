import { component$ } from '@builder.io/qwik';
import styles from './hero.module.css';

export default component$(() => {
  return (
    <div class={['container', styles.g1]}>
            <div class="absolute inset-0 overflow-hidden">
        <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blob">
                    <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="2" result="noise" seed="1"/>
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
            </defs>
            <g filter="url(#blob)">
                <circle class="styles.circle1" cx="25%" cy="50%" r="50" />
                <circle class="styles.circle2" cx="50%" cy="50%" r="50" />
                <circle class="styles.circle3" cx="75%" cy="50%" r="50" />
                <circle class="styles.circle4" cx="100%" cy="50%" r="50" />
            </g>
        </svg>
    </div>


    </div>
  );
});
