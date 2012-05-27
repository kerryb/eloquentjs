function escapeHTML(html) {
  return html.replace(/["<>&]/g, function(match){
      switch (match) {
        case "<": return "&lt;";
        case ">": return "&gt;";
        case '"': return "&quot;";
        case "&": return "&amp;";
        default: return match;
      }
    });
}
