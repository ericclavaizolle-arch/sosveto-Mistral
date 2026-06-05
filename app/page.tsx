<style>
*{box-sizing:border-box;margin:0;padding:0}
.app{max-width:460px;margin:0 auto;font-family:var(--font-sans);padding:0 0 24px}
.step{display:none}.step.active{display:block}
.card{background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-lg);padding:16px;margin-bottom:12px}
.btn{width:100%;padding:13px;border-radius:var(--border-radius-md);border:0.5px solid var(--color-border-secondary);background:var(--color-background-primary);color:var(--color-text-primary);font-size:14px;font-weight:500;cursor:pointer;font-family:var(--font-sans)}
.btn:hover{background:var(--color-background-secondary)}
.btn-primary{background:#8B1A1A;color:#ffffff;border:none;font-size:18px;font-weight:700;padding:18px;letter-spacing:0.3px;box-shadow:0 4px 20px rgba(139,26,26,0.55)}
.btn-primary:hover{background:#A32020}
.back-btn{background:none;border:none;cursor:pointer;color:var(--color-text-secondary);font-size:14px;padding:0;font-family:var(--font-sans);display:flex;align-items:center;gap:4px}
.header{display:flex;align-items:center;gap:10px;padding:16px 0 8px}
.animal-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:12px 0}
.animal-btn{padding:20px 8px;border-radius:var(--border-radius-lg);border:0.5px solid var(--color-border-tertiary);background:var(--color-background-primary);cursor:pointer;text-align:center;font-family:var(--font-sans)}
.animal-btn:hover{border-color:#8B1A1A;background:var(--color-background-secondary)}
.sym-btn{width:100%;padding:14px;margin-bottom:8px;border-radius:var(--border-radius-md);border:0.5px solid var(--color-border-tertiary);background:var(--color-background-primary);cursor:pointer;text-align:left;display:flex;align-items:center;gap:10px;font-family:var(--font-sans)}
.sym-btn:hover{background:var(--color-background-secondary)}
.sym-cta{font-size:12px;font-weight:500;white-space:nowrap;padding:5px 10px;border-radius:var(--border-radius-md);flex-shrink:0}
.cta-danger{background:#8B1A1A;color:#fff}
.cta-warning{background:var(--color-background-warning);color:var(--color-text-warning)}
.cta-success{background:var(--color-background-success);color:var(--color-text-success)}
.tag{display:inline-block;background:var(--color-background-secondary);color:var(--color-text-secondary);font-size:12px;padding:3px 10px;border-radius:20px;margin:2px 3px 2px 0}
.divider{height:0.5px;background:var(--color-border-tertiary);margin:12px 0}
.geste-item{display:flex;gap:10px;margin-bottom:10px;align-items:start}
.geste-text{font-size:13px;color:var(--color-text-secondary);line-height:1.5}
.vet-item{padding:12px 0;border-bottom:0.5px solid var(--color-border-tertiary)}
.vet-item:last-child{border-bottom:none}
.section-label{font-size:12px;font-weight:500;color:var(--color-text-secondary);letter-spacing:0.5px;text-transform:uppercase;margin-bottom:10px}
.pay-option{width:100%;padding:13px 16px;border-radius:var(--border-radius-md);border:0.5px solid var(--color-border-tertiary);background:var(--color-background-primary);cursor:pointer;text-align:left;display:flex;align-items:center;gap:12px;margin-bottom:8px;font-family:var(--font-sans)}
.pay-option:hover{background:var(--color-background-secondary)}
.pay-option.featured{border:2px solid #8B1A1A}
.pay-name{font-size:14px;font-weight:500;color:var(--color-text-primary)}
.pay-sub{font-size:12px;color:var(--color-text-secondary)}
.pay-price{font-size:15px;font-weight:500;color:#8B1A1A;margin-left:auto;flex-shrink:0}
.native-pay{display:flex;gap:8px;margin-bottom:12px}
.apple-btn{flex:1;padding:12px;background:#000;color:#fff;border:none;border-radius:var(--border-radius-md);font-size:14px;font-weight:500;cursor:pointer;font-family:var(--font-sans)}
.google-btn{flex:1;padding:12px;background:#fff;color:#000;border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-md);font-size:14px;font-weight:500;cursor:pointer;font-family:var(--font-sans)}
.carrier-section{background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:12px;margin-top:10px}
</style>

<div class="app">

<div id="step-landing" class="step active">
  <div style="text-align:center;padding:24px 16px 16px">
    <div style="font-size:48px;margin-bottom:10px">🐾 🐾</div>
    <div style="font-size:22px;font-weight:500;margin:10px 0 4px;color:var(--color-text-primary)">SOS <span style="color:#8B1A1A">Véto</span><span style="color:var(--color-text-success)">+</span></div>
    <div style="background:var(--color-background-danger);color:var(--color-text-danger);font-size:11px;font-weight:500;padding:2px 10px;border-radius:var(--border-radius-md);display:inline-block;margin-bottom:16px">Urgences animales 24h/24</div>
    <h1 style="font-size:22px;font-weight:500;line-height:1.3;margin-bottom:10px;color:var(--color-text-primary)">Votre animal ne va pas bien ?</h1>
    <p style="font-size:14px;color:var(--color-text-secondary);margin-bottom:20px;line-height:1.6">Obtenez une réponse immédiate — protocole d'urgence, gestes à faire et vétérinaires proches.</p>
    <button class="btn btn-primary" onclick="goTo('step-animal')">Analyser les symptômes →</button>
    <p style="font-size:12px;margin-top:8px;color:var(--color-text-tertiary)">À partir de 2,99 € · Résultat en 30 secondes</p>
  </div>

  <div class="card" style="border-color:var(--color-border-success);background:var(--color-background-success);margin:0 16px 12px">
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px">
      <i class="ti ti-shield-check" style="color:var(--color-text-success)" aria-hidden="true"></i>
      <span style="font-size:13px;font-weight:500;color:var(--color-text-success)">Protocoles vérifiés par des vétérinaires</span>
    </div>
    <p style="font-size:13px;color:var(--color-text-secondary)">SOS Véto+ vous guide immédiatement. Ne remplace pas une consultation.</p>
  </div>

  <div class="card" style="margin:0 16px 12px">
    <div class="section-label">Nos formules</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
      <div style="border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-md);padding:12px;text-align:center">
        <div style="font-size:13px;font-weight:500;color:var(--color-text-primary);margin-bottom:4px">SOS Instant</div>
        <div style="font-size:20px;font-weight:500;color:#8B1A1A">2,99€</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-top:4px">Protocole + gestes d'urgence</div>
      </div>
      <div style="border:2px solid #8B1A1A;border-radius:var(--border-radius-md);padding:12px;text-align:center">
        <div style="font-size:10px;color:#8B1A1A;font-weight:500;margin-bottom:2px">RECOMMANDÉ</div>
        <div style="font-size:13px;font-weight:500;color:var(--color-text-primary);margin-bottom:4px">SOS Localisation</div>
        <div style="font-size:20px;font-weight:500;color:#8B1A1A">4,99€</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-top:4px">TOUT le protocole d'urgence + Vétérinaires GPS</div>
      </div>
      <div style="border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-md);padding:12px;text-align:center">
        <div style="font-size:13px;font-weight:500;color:var(--color-text-primary);margin-bottom:4px">Mensuel</div>
        <div style="font-size:20px;font-weight:500;color:#8B1A1A">9,99€</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-top:4px">Illimité + tout inclus</div>
      </div>
      <div style="border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-md);padding:12px;text-align:center">
        <div style="font-size:13px;font-weight:500;color:var(--color-text-primary);margin-bottom:4px">Annuel</div>
        <div style="font-size:20px;font-weight:500;color:#8B1A1A">59€</div>
        <div style="font-size:11px;color:var(--color-text-secondary);margin-top:4px">−50% · Tout illimité</div>
      </div>
    </div>
  </div>
</div>
