export default {
  'header.nav.about':  'About',
  'header.nav.home':   'Home',
  'header.nav.github': 'GitHub',


  'footer.header.text': 'Cliff Effects Tool',
  'footer.cfbCredit':   'Made with ♥ by Code for Boston',


  'inputs.ControlledRadioYesNo.yes': 'Yes',
  'inputs.ControlledRadioYesNo.no':  'No',


  'homePage.appName':          'Cliff Effects Tool',
  'homePage.prototypeNote':    'GUIDANCE PROTOTYPE*',
  'homePage.cautionaryNote':   '*This is a prototype and should not be used to make financial decisions',
  'homePage.toFirstInputPage': 'Get Started',
  'homePage.toAboutPage':      'Learn More',


  'aboutPage.header':                       'About the Cliff Effects Tool',
  'aboutPage.whatFor.header':               'What is this tool for?',
  'aboutPage.whatFor.importantNote.header': 'Important Note:',
  'aboutPage.whatFor.importantNote.text':   `This application is a minimum viable product. It should not be used as the sole tool to understand a client's SNAP or Section 8 financial situation, or for any other public assistance program.`,
  'aboutPage.whatFor.text':                 `This tool can help show how a change in income affects how much someone receives in public assistance from SNAP (Supplemental Nutrition Assistance Program) and Section 8 Housing Voucher benefits. It was designed for the case managers at {projectHopeLink} with the aim of helping to predict changes in their clients' benefits.`,
  'aboutPage.why.header':                   'Why is this tool important?',
  'aboutPage.why.paragraph1':               `A cliff effect occurs when a slight change in a household’s circumstances - say, a slight pay raise - disproportionately lowers their benefits. The household is working to increase what they earn, but they end up with a net loss that actually puts them further behind. These cliff effects prevent many families from actually getting off of public assistance programs.`,
  'aboutPage.why.paragraph2':               `Cliff effects are also difficult to predict. The interactions between income, household size, many other criteria, as well as the effects of the programs themselves impact each other in unexpected ways. We're exploring ways to deal with this issue of complexity and help families better understand and predict their situation.`,
  'aboutPage.videoLink':                    'Two-minute video describing cliff effects',
  'aboutPage.quantitativeLink':             'Quantitative scenarios demonstrating cliff effects',
  'aboutPage.benefitsLink':                 'Breakdown of different benefits offered in MA',
  'aboutPage.howToUse.header':              'How do I use this tool?',
  'aboutPage.howToUse.text':                `Go step-by-step to add information about a client's current benefits, household, income, and other relevant information. This information will be used to predict the client's approximate benefit amount. When you reach the end, change the 'Future Income' amount to see how a change in earned income will cause a change in benefit amount. Currently, the SNAP and Section 8 Housing Voucher programs are both available. Note that predictions may not directly match up with a client’s current benefit amount. The app’s focus is the amount of change that occurs in benefits when there are changes in earned income.`,
  'aboutPage.howToUse.note.text':           `Please note that this app does not store user data, so {refreshNote}. Each time you go through the app, it's a clean slate.`,
  'aboutPage.howToUse.note.refreshNote':    `if you refresh the page the data you've entered will be lost`,
  'aboutPage.whoMadeThis.header':           'Who is behind this?',
  'aboutPage.whoMadeThis.paragraph1':       `This application is part of a project made possible by a Boston Foundation Open Door Grant to the University of Massachusetts Boston's {centerForSocialPolicyLink}, in close partnership with {projectHopeLink} and {codeForBostonLink}. The Center for Social Policy is the lead partner for the {onSolidGroundCoalitionLink}`,
  'aboutPage.whoMadeThis.paragraph2':       `The code base is being maintained on {githubLink}, by {codeForBostonLink} volunteers. For more information or to report a bug, please contact {contactEmailLink}.`,
  'aboutPage.whoMadeThis.paragraph3':       `Here's a special thank you to all the Code for Boston volunteers who brought you this application, especially {volunteerNamesButLast} and {lastVolunteerName}.`,
  

  'githubLink.text': 'GitHub',


  'visitPage.previous':  'Previous',
  'visitPage.next':      'Next',
  'visitPage.newClient': 'New Client',

  'visitPage.stepBar.currentBenefits':         'Current Benefits',
  'visitPage.stepBar.household':               'Household',
  'visitPage.stepBar.income':                  'Income',
  'visitPage.stepBar.expenses':                'Expenses',
  'visitPage.stepBar.predictions':             'Predictions',
  'visitPage.currentIncome.incomeColumnTitle': 'Income Type',

  'visitPage.IntervalColumnHeadings.weekly':   'Weekly',
  'visitPage.IntervalColumnHeadings.monthly':  'Monthly',
  'visitPage.IntervalColumnHeadings.yearly':   'Yearly',
  'visitPage.IntervalColumnHeadings.yesLabel': 'Yes',
  'visitPage.IntervalColumnHeadings.noLabel':  'No',

  'visitPage.currentBenefits.title':            'Current Benefits',
  'visitPage.currentBenefits.clarifier':        'Select the benefits you currently receive',
  'visitPage.currentBenefits.hasSection8Label': 'Do you have Section 8 Housing?',
  'visitPage.currentBenefits.hasSection8Hint':  'Section 8 provides rental housing assistance.',
  'visitPage.currentBenefits.hasSNAPLabel':     'Do you have SNAP?',
  'visitPage.currentBenefits.hasSNAPHint':      'SNAP provides assistance with buying food',

  'visitPage.household.title':           'Household',
  'visitPage.household.clarifier':       'Information about the members of your household.',
  'visitPage.household.role':            'Role',
  'visitPage.household.age':             'Age',
  'visitPage.household.disabled':        'Disabled',
  'visitPage.household.headOfHousehold': 'Head of Household',
  'visitPage.household.addMember':       'Add a member',
  'visitPage.household.spouse':          'Spouse of Head of Household',
  'visitPage.household.childOther':      'Child/Other Household Member',
  'visitPage.household.previous':        'Previous',
  'visitPage.household.next':            'Next',

  'visitPage.currentIncome.title':                  'Current Household Income',
  'visitPage.currentIncome.clarifier':              'Income that you collected in the past 12 months.',
  'visitPage.currentIncome.explainSNAPCalculation': 'This prototype will attempt to make its own calculations for SNAP amount',
  'visitPage.currentIncome.earnedIncome.label':     'Earned income',
  'visitPage.currentIncome.earnedIncome.hint':      'Earned income is how much you and your family get paid from working',
  'visitPage.currentIncome.TAFDC.label':            'TAFDC',
  'visitPage.currentIncome.TAFDC.hint':             'Transitional Aid to Families with Dependent Children provides short-term financial assistance to families with children',
  'visitPage.currentIncome.SSI.label':              'SSI',
  'visitPage.currentIncome.SSI.hint':               'Supplemental Security Income is a federal program that provides financial and health care assistance to people 65 and over, or people who are blind or disabled',
  'visitPage.currentIncome.SSDI.label':             'SSDI',
  'visitPage.currentIncome.SSDI.hint':              'Social Security Disability Income is a federal program to help people with disabilities',
  'visitPage.currentIncome.childSupport.label':     'Child support recieved',
  'visitPage.currentIncome.childSupport.hint':      'Child support is money paid to you by a former spouse to help your child',
  'visitPage.currentIncome.unemployment.label':     'Unemployment',
  'visitPage.currentIncome.unemployment.hint':      'Unemployment benefits provide income to people who have been laid off',
  'visitPage.currentIncome.workersComp.label':      `Worker's compensation`,
  'visitPage.currentIncome.workersComp.hint':       `Worker's Compensation provides assistance for people who have been injured on the job`,
  'visitPage.currentIncome.pension.label':          'Pension',
  'visitPage.currentIncome.pension.hint':           'A pension provides income to retirees, usually from their former employers',
  'visitPage.currentIncome.socialSecurity.label':   'Social security',
  'visitPage.currentIncome.socialSecurity.hint':    'Social Security is a federal program that provides assistance to retirees',
  'visitPage.currentIncome.alimony.label':          'Alimony',
  'visitPage.currentIncome.alimony.hint':           'Alimony is money paid by one spouse to the other after a divorce',
  'visitPage.currentIncome.otherIncome.label':      'Other income',
  'visitPage.currentIncome.otherIncome.hint':       'Please note income you may have from sources that are not listed above',
  'visitPage.currentIncome.previous':               'Previous',
  'visitPage.currentIncome.next':                   'Next',

  'visitPage.currentExpenses.title':             'Current Household Expenses',
  'visitPage.currentExpenses.columnHeaderTitle': 'Expense Type',

  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.sectionHeading':                      'Reasonable Unreimbursed Non-Medical Child(ren) Care',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.subheading':                          `A "child" is a person 12 or younger. Don't include amounts that are paid for by other benefit programs.`,
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.childDirectCare.label':               'Direct care costs',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.childDirectCare.hint':                'How much do you pay for child care out of pocket?',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.childBeforeAndAfterSchoolCare.label': 'Before- and after-school care',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.childBeforeAndAfterSchoolCare.hint':  'How much do you pay for child care for times before or after school?',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.childTransportation.label':           'Transportation costs',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.childTransportation.hint':            'How much do you pay for transportation?',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.childOtherCare.label':                'Other care',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.childOtherCare.hint':                 'How much do you pay for other child care?',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.doEarnBecauseOfChildCare':            'Does child care allow you to make additional income?',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.earnedBecauseOfChildCare':            'Income made possible by childcare expenses',
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.wouldNoChildCareChangeIncome':        `If you didn't have that child care, would it change how much pay you can bring home?`,
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.noChildCareIncomeChange':             'How much less would you make?',
  'visitPage.currentExpenses.childSupport.sectionHeading':                                         'Child Support',
  'visitPage.currentExpenses.childSupport.childSupportPaidOut':                                    '**Legally obligated** child support',
  'visitPage.currentExpenses.dependentCare.sectionHeading':                                        'Dependent Care of Persons Over 12 Years of Age',
  'visitPage.currentExpenses.dependentCare.subheading':                                            `For the care of people who are older than 12, but are still dependents (those under 18 or disabled). Don't include amounts that are paid for by other benefit programs.`,
  'visitPage.currentExpenses.dependentCare.directCareCosts':                                       'Direct care costs',
  'visitPage.currentExpenses.dependentCare.transportationCosts':                                   'Transportation costs',
  'visitPage.currentExpenses.dependentCare.otherCare':                                             'Other care',
  'visitPage.currentExpenses.elderlyDisabled.sectionHeading':                                      'Unreimbursed Disabled/Handicapped/Elderly Assistance',
  'visitPage.currentExpenses.elderlyDisabled.moreInformation':                                     `Unreimbursed expenses to cover care attendants and auxiliary apparatus for any family member who is elderly or is a person with disabilities. Auxiliary apparatus are items such as wheelchairs, ramps, adaptations to vehicles, or special equipment to enable a blind person to read or type, but only if these items are directly related to permitting the disabled person or other family member to work.
Examples of eligible disability assistance expenses:
  - The payments made on a motorized wheelchair for the 42 year old son of the head of household enable the son to leave the house and go to work each day on his own. Prior to the purchase of the motorized wheelchair, the son was unable to make the commute to work. These payments are an eligible disability assistance expense.
  - Payments to a care attendant to stay with a disabled 16-year-old child allow the child’s mother to go to work every day. These payments are an eligible disability assistance allowance.
`,
  'visitPage.currentExpenses.elderlyDisabled.disabledAssistance':                              'Disabled/Handicapped assistance',
  'visitPage.currentExpenses.elderlyDisabled.wouldNoAssistanceChangeIncome':                   `If you didn't have that assistance, would it change how much pay you can bring home?`,
  'visitPage.currentExpenses.elderlyDisabled.unreimbursedMedicalExpenses.sectionHeading':      'Unreimbursed Medical Expenses',
  'visitPage.currentExpenses.elderlyDisabled.unreimbursedMedicalExpenses.disabledMedical':     'Disabled/Elderly medical expenses',
  'visitPage.currentExpenses.elderlyDisabled.unreimbursedMedicalExpenses.otherMemberExpenses': 'Medical expenses of other members',
  'visitPage.currentExpenses.elderlyDisabled.unreimbursedMedicalExpenses.moreInformation':     `Do not repeat anything you already listed in the section above. Examples of allowable medical expenses:
  - The orthodontist expenses for a child’s braces.
  - Services of doctors and health care professionals.
  - Services of health care facilities.
  - Medical insurance premiums. 
  - Prescription/non-prescription medicines (prescribed by a physician).
  - Transportation to treatment (cab fare, bus fare, mileage).
  - Dental expenses, eyeglasses, hearing aids, batteries.
  - Live-in or periodic medical assistance.
  - Monthly payment on accumulated medical bills (regular monthly payments on a bill that was previously incurred)`,
  'visitPage.currentExpenses.unreimbursedNonMedicalChildCare.noAssistanceIncomeChange': 'How much less would you make?',
  'visitPage.currentExpenses.housing.sectionTitle':                                     'Housing',
  'visitPage.currentExpenses.housing.clarifier':                                        'What is your housing situation?',
  'visitPage.currentExpenses.housing.expenseTypes.mortgage':                            'Mortgage',
  'visitPage.currentExpenses.housing.expenseTypes.insuranceCosts':                      'Insurance Costs',
  'visitPage.currentExpenses.housing.expenseTypes.propertyTax':                         'Property Tax',
  'visitPage.currentExpenses.housing.situations.homeless':                              'Homeless',
  'visitPage.currentExpenses.housing.situations.renter':                                'Renter',
  'visitPage.currentExpenses.housing.situations.homeowner':                             'Homeowner',
  'visitPage.currentExpenses.housing.monthlyContractRent.label':                        'Monthly Contract Rent (the total rent for your apartment)',
  'visitPage.currentExpenses.housing.monthlyContractRent.hint':                         'The total rent for your apartment',
  'visitPage.currentExpenses.housing.monthlyRentShare.label':                           'Your Monthly Rent Share (how much of the total rent you have to pay)',
  'visitPage.currentExpenses.housing.monthlyRentShare.hint':                            'How much of the total rent you have to pay',
  'visitPage.currentExpenses.housing.utilitiesSubheading':                              'Which of these utilities do you pay for?',
  'visitPage.currentExpenses.housing.climateControl.label':                             'Heating or cooling (e.g. A/C during summer)',
  'visitPage.currentExpenses.housing.climateControl.hint':                              'How much do you pay if you have a separate bill for heating and/or cooling',
  'visitPage.currentExpenses.housing.nonHeatElectricity.label':                         'Electricity for non-heating purposes',
  'visitPage.currentExpenses.housing.nonHeatElectricity.hint':                          'How much do you pay for any electric usage (other than for heat)',
  'visitPage.currentExpenses.housing.phone.label':                                      'Telephone service',
  'visitPage.currentExpenses.housing.phone.hint':                                       'How much do you pay for basic telephone service',
  'visitPage.currentExpenses.housing.fuelAssistance.label':                             'Do you get Fuel Assistance?',
  'visitPage.currentExpenses.housing.fuelAssistance.hint':                              'Fuel Assistance helps you pay for heating fuel',
  'visitPage.currentExpenses.housing.previous':                                         'Previous',
  'visitPage.currentExpenses.housing.next':                                             'Next',

  'visitPage.predictions.title':                     'What Might Happen?',
  'visitPage.predictions.columnHeaderTitle':         'Income Type',
  'visitPage.predictions.futureIncomeQuestion':      'How much money would you get paid in the future? (You can try different amounts)',
  // see Predictions.js
  'visitPage.predictions.tabTitles.changes':         'Changes',
  // see Predictions.js
  'visitPage.predictions.tabTitles.changesChart':    'Changes Chart',
  // see Predictions.js
  'visitPage.predictions.tabTitles.stackedIncomes':  'Stacked Incomes',
  // see Predictions.js
  'visitPage.predictions.tabTitles.benefitPrograms': 'Benefit Programs',
  'visitPage.predictions.chartsHeader':              'With the new pay, how could your benefits change?',
  'visitPage.predictions.warningMessage':            `This tool is in testing and these numbers might not be right. If they're not, please {feedbackButton}`,
  'visitPage.predictions.feedbackLinkText':          'let us know',
  
  // Text Summary:
  'visitPage.predictions.summaryTitle':             `Summary`,
  'visitPage.predictions.summary.header':           `What could it add up to?`,
  'visitPage.predictions.summary.noBenefitsChosen': `On the first page of questions you didn't choose any of the benefits. If you're not getting any benefits now, this tool can't tell you if you will get any in the future. If you're trying to find help getting into a benefit program, try searching for "social services" in your local area.`,
  'visitPage.predictions.summary.noFutureChange':   `There is no change in your household's pay, so there's no change in your benefits.`,
  'visitPage.predictions.summary.details.header':   `What could happen?`,
  
  'visitPage.predictions.summary.details.current':       `Right now you earn \${currentEarnings} a month and this tool says that your benefits all add up to about \${totalBenefits}. All together, it says you bring in about \${currentTotal} a month.`,
  'visitPage.predictions.summary.details.future':        `If your household's pay changes to \${futureEarnings} a month this tool says your benefits might add up to about \${totalBenefits} a month. This is how your benefits might change:`,
  'visitPage.predictions.summary.details.benefit':       `{benefit} might change from about \${currentBenefitAmount} to about \${futureBenefitAmount} a month.`,
  'visitPage.predictions.summary.details.futureSummary': `If this tool is right, you might bring in about \${total} a month. That's {
    diffFactor, select,
    0 {the same as before}
    1 {\${change} more than before} 
    -1 {\${change} less than before} 
  }.`,
  'visitPage.predictions.summary.noCliff':         `After this, the tool says you could keep bringing in more with each raise.`,
  'visitPage.predictions.summary.cliffEndHeader':  `When could things get better?`,
  'visitPage.predictions.summary.cliffEndSummary': `The tool says that if you can get to where your household makes about \${earned} a month you could bring in about \${change} more each month all together.`,
  'visitPage.predictions.summary.findHelp':        `If you're worried about these results, please search for "social services" in your area to try to find a local case manager.`,
  'visitPage.predictions.summary.feedbackAsk':     `Are these numbers right? Please {feedbackButton}`,
  
  // Benefits Table:
  'visitPage.predictions.benefitsTableTitle': `Changes`,
  
  'visitPage.predictions.benefitsTable.rows.SNAP':                     `SNAP`,
  'visitPage.predictions.benefitsTable.rows.section8':                 `Section 8 Housing`,
  'visitPage.predictions.benefitsTable.rows.totalBenefits':            `Total Benefits`,
  'visitPage.predictions.benefitsTable.rows.income':                   `Income`,
  'visitPage.predictions.benefitsTable.rows.netTotal':                 `Net Total`,
  'visitPage.predictions.benefitsTable.currentSNAP':                   `\${currentSNAPBenefit} / month`,
  'visitPage.predictions.benefitsTable.futureSNAP':                    `\${futureSNAPBenefit} / month`,
  'visitPage.predictions.benefitsTable.SNAPDiff':                      `{sign}\${SNAPDiff} / month`,
  'visitPage.predictions.benefitsTable.currentSection8':               `\${currentSection8Benefit} / month`,
  'visitPage.predictions.benefitsTable.futureSection8':                `\${futureSection8Benefit} / month`,
  'visitPage.predictions.benefitsTable.section8Diff':                  `{sign}\${section8Diff} / month`,
  'visitPage.predictions.benefitsTable.currentTotalBenefits':          `\${currentTotalBenefits} / month`,
  'visitPage.predictions.benefitsTable.futureTotalBenefits':           `\${futureTotalBenefits} / month`,
  'visitPage.predictions.benefitsTable.totalBenefitsDiff':             `{sign}\${totalBenefitsDiff} / month`,
  'visitPage.predictions.benefitsTable.currentIncome':                 `\${currentIncome} / month`,
  'visitPage.predictions.benefitsTable.futureIncome':                  `\${futureIncome} / month`,
  'visitPage.predictions.benefitsTable.incomeDiff':                    `\${incomeDiff} / month`,
  'visitPage.predictions.benefitsTable.currentNetTotal':               `\${currentNetTotal} / month`,
  'visitPage.predictions.benefitsTable.futureNetTotal':                `\${futureNetTotal} / month`,
  'visitPage.predictions.benefitsTable.netTotalDiff':                  `\${netTotalDiff} / month`,
  'visitPage.predictions.benefitsTable.columnHeaders.benefit':         `Benefit`,
  'visitPage.predictions.benefitsTable.columnHeaders.currentBenefits': `Current Benefits`,
  'visitPage.predictions.benefitsTable.columnHeaders.newEstimate':     `New Estimate`,
  'visitPage.predictions.benefitsTable.columnHeaders.difference':      `Difference`,
  
  // Stacked Bar Graph:
  'visitPage.predictions.stackedBarGraphTitle':   `Changes Chart`, // see line 266 above
  'visitPage.predictions.moneyInAsIncomeChanges': `Money Coming In as Income Changes`, // see StackedBarGraph.js
  // Stacked Area Graph:
  'visitPage.predictions.stackedAreaGraphTitle':  `Stacked Incomes`, // see line 267 above
  'visitPage.predictions.allMoneyComingIn':       `All Money Coming In as Income Changes`, // see StackedAreaGraph.js
  // Benefit Programs Graph, showing benefit programs as lines not areas:
  'visitPage.predictions.benefitProgramsTitle':   `Individual Benefit Amounts for Household as Income Changes`, // maybe rename as benefitProgramsSubTitle ? see also BenefitsLineGraph.js
  'visitPage.predictions.benefitValue':           `Benefit Value ($)`, // see BenefitsLineGraph.js
  // Snippets that are used in more than one chart, table, or graph:
  'visitPage.predictions.totalMoney':             `Total Money Coming In ($)`, // see StackedAreaGraph.js, StackedBarGraph.js
  'visitPage.predictions.weeklyIncome':           `Weekly Income ($)`,
  'visitPage.predictions.monthlyIncome':          `Monthly Income ($)`,
  'visitPage.predictions.yearlyIncome':           `Yearly Income ($)`,
  'visitPage.predictions.hasIncome':              `Income`,
  'visitPage.predictions.hasSNAP':                `SNAP`,
  'visitPage.predictions.hasSection8':            `Section 8`, 
  'visitPage.predictions.futureIncomeLine':       `Future Income`, // see VerticalLine.js
  'visitPage.predictions.buttonWeekly':           `Weekly`, // see cashflow.js, GraphTimeButtons
  'visitPage.predictions.buttonMonthly':          `Monthly`, // see cashflow.js, GraphTimeButtons
  'visitPage.predictions.buttonYearly':           `Yearly`, // see cashflow.js, GraphTimeButtons


  'warningModal.header':              `IMPORTANT!`,
  'warningModal.warning':             `This tool is in testing.  Predictions should not be used to make financial decisions.`,
  'warningModal.buttonAcceptWarning': `Continue`,
  'warningModal.buttonCancel':        `Cancel`,
  'warningModal.formInstructions':    `Please indicate you understand the following:`,
  'warningModal.checkboxLabel1':      `This tool is not finished.`,
  'warningModal.checkboxLabel2':      `I can't count on what this tool tells me.`,

  'feedbackForm.header':                       'Tell Us More',
  'feedbackForm.labels.currentSNAPCorrection': `If the **current** SNAP amount was wrong, what'
  s the right amount ?`,
  'feedbackForm.labels.futureSNAPCorrection':     `If the **future** SNAP amount was wrong, what's the right amount?`,
  'feedbackForm.labels.futureSection8Correction': `If the **future** Section 8 amount was wrong, what's the right amount?`,
  'feedbackForm.labels.otherCircumstances':       'What else could be going on that could affect your benefit amount? For example, are you a veteran? Are you a full-time student?',
  'feedbackForm.labels.bugReport':                'If there was a bug or error, describe the bug and what you were trying to do when the bug happened.',
  'feedbackForm.labels.otherComments':            'Do you have any other comments?',
  'feedbackForm.sendWithMyInformation':           'Send with my information',
  'feedbackForm.sendWithoutMyInformation':        'Send without my information',
  'feedbackForm.send':                            'Send',
  'feedbackForm.ready':                           'Ready',
  'feedbackForm.cancel':                          'Cancel',
  'feedbackForm.askPermission':                   `Is it ok if we save the information you've put in here? We won't save anything else about you. If you had problems with the app, it'll help us work on them.`,
  'feedbackForm.errorMessage':                    `Error submitting data, please try again or {emailLink}.`,
  'feedbackForm.emailLinkText':                   'email us',
  'feedbackForm.yes':                             'Yes',
  'feedbackForm.no':                              'No',

  'feedbackAnytime.buttonText': 'Tell Us More',

  'betaWarning.shortText': 'This tool is a prototype.',
  'betaWarning.longText':  'This tool is a prototype and should not be used to make financial decisions.',
};
