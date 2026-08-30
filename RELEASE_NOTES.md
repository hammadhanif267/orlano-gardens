# Orlano Gardens — latest fixes

This build addresses the latest reported desktop/mobile issues:

- Removed the duplicate `className` that caused the Services cards to lose their card styling and made the text unreadable.
- Services cards now use stable image sizing with a dedicated readable text area.
- Project filter/search initialization now reruns safely on Next.js client-side route changes and cleans up listeners, so filters work after navigating to `/portfolio` without a full refresh.
- Active project filter remains visually selected; inactive filters no longer look selected on hover.
- Project comparisons now label the two halves `Before` and `After`.
- Fixed project image alt text for accuracy.
- Retained the hydration-safe setup and previous responsive/header/footer/loading fixes.
