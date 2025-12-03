/**
 * Utility function for merging Tailwind CSS classes
 * Combines class names and handles conflicts intelligently
 */
export function cn(...inputs) {
    return inputs.filter(Boolean).join(' ');
}
