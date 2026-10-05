/* Body copy can link to other pages with [label](route-segment), e.g.
 * "see [medical doors](healthcare-contractor/medical-doors)". Parts.jsx renders them as router
 * links; `plain` strips the markup for places that need text only (llms-full.txt). */
export const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;
export const plain = (text) => text.replace(LINK_PATTERN, '$1');
