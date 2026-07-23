# Better Care 照片库

本目录收录经 Image 2 生成并人工检查的候选摄影素材，供未来网页设计与内容更新使用。当前图片尚未接入任何页面组件。

## 图片类型

- `hero-*`：Service 页面背景图。画面简洁、主体偏右，并在左侧保留标题与文案卡片所需的低干扰空间。
- `detail-*`：Service 页面内容卡图片。使用更近的镜头，展示手部、工具、动作及真实环境细节。
- 全部图片按页面 slug 建立独立文件夹。

## About 页面

| 文件 | 场景 |
| --- | --- |
| `about/clinical-director-consultation.png` | 联合健康负责人在自然光诊室中倾听来访者；当前 About 主图首选 |
| `about/participant-family-care-planning-home.png` | 参与者、家属和专业人员在家讨论支持计划 |
| `about/participant-family-clinician-community-garden.png` | 参与者、家属和专业人员在社区花园同行交流 |

## Services 总览页面

| 文件 | 场景 |
| --- | --- |
| `services/overview/home-physiotherapy-mobility-assessment.png` | 家庭环境中的物理治疗活动能力评估 |
| `services/overview/participant-practitioner-goal-planning-home.png` | 参与者与专业人员共同制定目标 |
| `services/overview/outpatient-rehabilitation-walking-assessment.png` | 社区医院门诊康复空间中的步行评估 |
| `services/overview/community-market-occupational-therapy.png` | 社区市场中的生活技能与选择支持 |

## Service 页面配对

| Service | Hero 背景图 | Detail 内容卡图 |
| --- | --- | --- |
| Physiotherapy | `services/physiotherapy/hero-rehabilitation-garden-walk.png` | `services/physiotherapy/detail-hydrotherapy-balance-training.png` |
| Occupational Therapy | `services/occupational-therapy/hero-accessible-sensory-garden.png` | `services/occupational-therapy/detail-adaptive-kitchen-tools.png` |
| Social Work | `services/social-work/hero-participant-practitioner-goal-planning.png` | `services/social-work/detail-community-planning-conversation.png` |
| Allied Health Assistance | `services/allied-health-assistance/hero-rehabilitation-courtyard-walking.png` | `services/allied-health-assistance/detail-delegated-resistance-band-exercise.png` |
| Myotherapy | `services/myotherapy/hero-shoulder-movement-assessment.png` | `services/myotherapy/detail-instrument-assisted-soft-tissue-treatment.png` |
| Early Childhood Supports | `services/early-childhood-supports/hero-accessible-playground-bubbles.png` | `services/early-childhood-supports/detail-family-turn-taking-play.png` |
| Personal Care | `services/personal-care/hero-morning-front-garden.png` | `services/personal-care/detail-morning-routine-clothing-choice.png` |
| Travel & Transport | `services/travel-transport/hero-accessible-tram-stop.png` | `services/travel-transport/detail-journey-planning.png` |
| Daily Tasks / Shared Living | `services/daily-tasks-shared-living/hero-shared-garden-routine.png` | `services/daily-tasks-shared-living/detail-shared-meal-preparation.png` |
| Supported Independent Living | `services/supported-independent-living/hero-independent-home-arrival.png` | `services/supported-independent-living/detail-weekly-household-routine.png` |
| Development Life Skills | `services/development-life-skills/hero-community-garden-herbs.png` | `services/development-life-skills/detail-meal-planning-budgeting.png` |
| Household Tasks | `services/household-tasks/hero-outdoor-laundry-routine.png` | `services/household-tasks/detail-kitchen-shelf-organisation.png` |
| Innovative Community Participation | `services/innovative-community-participation/hero-community-ceramics-arrival.png` | `services/innovative-community-participation/detail-pottery-wheel-activity.png` |
| Community Participation | `services/community-participation/hero-community-garden-event.png` | `services/community-participation/detail-seedling-community-connection.png` |
| Group & Centre Activities | `services/group-centre-activities/hero-community-centre-arrival.png` | `services/group-centre-activities/detail-group-cooking-activity.png` |
| Support Workers | `services/support-workers/hero-creek-trail-conversation.png` | `services/support-workers/detail-everyday-plan-before-leaving.png` |

## 使用说明

- 图片为横向 PNG，适合网页横幅、卡片及内容分栏裁切。
- 在 Next.js 中可从 `/generated-photos/...` 直接引用。
- 使用前应根据实际容器检查裁切焦点、文字对比度和移动端表现。
- 不要把生成图片描述成真实员工、真实客户或真实服务现场。
- 服务照片提示词位于 `app/services/_content/photo-prompts.ts`。
