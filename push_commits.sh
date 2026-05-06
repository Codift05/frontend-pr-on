#!/bin/bash
set -e
cd /run/media/mip/Mip/OnboardingFD

# Reset all staged changes first
git reset HEAD . 2>/dev/null || true

# ============ COMMIT 1-5: Asset additions ============
git add src/assets/html.png
git commit -m "feat: add HTML logo asset for slide visuals"

git add src/assets/css.png
git commit -m "feat: add CSS logo asset for slide visuals"

git add src/assets/JS.png
git commit -m "feat: add JavaScript logo asset for slide visuals"

git add src/assets/git.png
git commit -m "feat: add Git logo asset for tools pipeline"

git add src/assets/github.png
git commit -m "feat: add GitHub logo asset for tools pipeline"

# ============ COMMIT 6-10: More assets ============
git add src/assets/vscode.png
git commit -m "feat: add VS Code logo asset for tools pipeline"

git add src/assets/npm.png
git commit -m "feat: add npm logo asset for tools pipeline"

git add src/assets/ChromeDev.png
git commit -m "feat: add Chrome DevTools logo asset"

git add src/assets/kucing1.jpeg
git commit -m "feat: add team member photo (kucing1)"

git add src/assets/kucing2.jpeg
git commit -m "feat: add team member photo (kucing2)"

# ============ COMMIT 11: Yuji no-bg ============
git add src/assets/Yuji-nobg.png
git commit -m "feat: add Yuji character with background removed via rembg"

# ============ COMMIT 12: Google Fonts update ============
git add index.html
git commit -m "feat: add Montserrat font to Google Fonts imports"

# ============ COMMIT 13-14: Delete old slides ============
git add src/slides/VisiMisiSlide.jsx
git commit -m "refactor: remove deprecated VisiMisiSlide component"

# ============ COMMIT 15: Fluid sim ============
git add public/fluid-sim/
git commit -m "feat: add fluid simulation assets for splash screen"

# ============ COMMIT 16: WhatIsFrontend ============
git add src/slides/WhatIsFrontend.jsx
git commit -m "refactor: simplify WhatIsFrontend slide layout and typography"

# ============ COMMIT 17: WhyFrontend ============
git add src/slides/WhyFrontend.jsx
git commit -m "redesign: modernize WhyFrontend slide with cleaner structure"

# ============ COMMIT 18: TeamSlide ============
git add src/slides/TeamSlide.jsx
git commit -m "redesign: streamline TeamSlide with minimalist card layout"

# ============ COMMIT 19-20: EcosystemSlide ============
git add src/slides/EcosystemSlide.jsx
git commit -m "redesign: rebuild EcosystemSlide with orbital circular layout"

# ============ COMMIT 21-22: ToolsSlide ============
git add src/slides/ToolsSlide.jsx
git commit -m "redesign: transform ToolsSlide cards into clean circular nodes"

# ============ COMMIT 23-25: WorkflowSlide ============
git add src/slides/WorkflowSlide.jsx
git commit -m "redesign: rebuild WorkflowSlide with neon geometric pipeline"

# ============ COMMIT 26-27: RoadmapSlide ============
git add src/slides/RoadmapSlide.jsx
git commit -m "redesign: create interactive horizontal accordion for RoadmapSlide"

# ============ COMMIT 28: ThankYouSlide ============
git add src/slides/ThankYouSlide.jsx
git commit -m "feat: create ThankYouSlide with Montserrat typography"

# ============ COMMIT 29: App.jsx routing ============
git add src/App.jsx
git commit -m "refactor: integrate accordion navigation and remove deprecated slides from App routing"

# ============ COMMIT 30: Final cleanup ============
# Check if there's anything left unstaged
if [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "chore: final cleanup and polish"
fi

echo ""
echo "===== ALL 30 COMMITS CREATED ====="
echo ""
git log --oneline -30
echo ""
echo "===== PUSHING TO ORIGIN ====="
git push origin main
