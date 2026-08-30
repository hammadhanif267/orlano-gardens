export default function CookieControls() {
  return <>
<section className="cookie-banner" aria-label="Cookie notice" data-cookie-banner="" hidden>
<div className="cookie-banner__grid">
<div><h2>Choose your cookie settings.</h2><p>Essential storage keeps this site working. Optional analytics and advertising storage remain off unless you allow them.</p></div>
<div className="cookie-banner__actions"><button className="btn btn--light btn--sm" type="button" data-cookie-open="">Manage</button><button className="btn btn--outline btn--sm cookie-reject-optional" type="button" data-cookie-reject="">Reject optional</button><button className="btn btn--gold btn--sm" type="button" data-cookie-accept="">Accept all</button></div>
</div>
</section><dialog className="cookie-dialog" aria-labelledby="cookie-title" data-cookie-dialog="">
<div className="cookie-dialog__inner">
<div className="cookie-dialog__head"><div><span className="eyebrow">Privacy controls</span><h2 id="cookie-title">Cookie choices</h2></div><button className="icon-btn" type="button" aria-label="Close cookie choices" data-cookie-close="">×</button></div>
<p className="muted">This static build does not install analytics or advertising scripts. These controls are ready for the developer to connect only after the final providers and consent requirements are confirmed.</p>
<div className="cookie-option"><div><strong>Essential</strong><small>Required for privacy choices and basic site operation.</small></div><label className="switch"><input type="checkbox" aria-label="Essential storage is always active" checked disabled /><span></span></label></div>
<div className="cookie-option"><div><strong>Analytics</strong><small>Optional measurement of site use after consent.</small></div><label className="switch"><input type="checkbox" name="analytics" aria-label="Allow analytics storage" /><span></span></label></div>
<div className="cookie-option"><div><strong>Advertising</strong><small>Optional ad personalization or measurement after consent where allowed.</small></div><label className="switch"><input type="checkbox" name="advertising" aria-label="Allow advertising storage" /><span></span></label></div>
<div className="btn-row"><button className="btn btn--primary" type="button" data-cookie-save="">Save choices</button><a className="btn btn--outline" href="/cookie-policy">Read Cookie Policy</a></div>
</div>
</dialog>
  </>;
}
