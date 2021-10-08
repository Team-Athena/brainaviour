import { useEffect, useState } from "react"
import styled from 'styled-components'
import Image from "next/image";
import { colors } from 'styles/colors'


const DefaultText = styled.h1`
    color: ${colors.light}70;
    font-size: 30px;
    font-weight: 500;
    height: 100%;
    text-align: center;
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-bottom: 10vh;
    margin-top: 6vh;
    margin-left: 20vw;
    margin-right: 16vw;
`;


export default function Explore() {
  return (
    <MainContainer>
        <h1>Prediction of behaviour on task-based states with time series signals</h1>
        <h3 style={{color: 'grey', marginTop: 0}}>Adrienne Rio, Zhi Chong, Shi Hui</h3>
        <p>The human brain consists of over 90 billion neurons, all communicating together
orchestrating different actions and behaviours. The strength of these communications form
functional connectivities, connected through multiple areas in the brain. When brain activity
occurs, these areas become active based on their respective purposes and reflect neural
activity (TEDx Talks, 2013). With the emergence of fMRI, it is now possible to measure these
changes and map out different sections of the brain of where they occur.</p>
    <Image src="/steps.png" alt="asd" width="200" height="400" style={{marginTop: 20, marginBottom: 20}}/>
<p>The recent research breakthrough from HCP shows that, from BOLD signals (Blood Oxygen Level-Dependent) extracted from fMRI data, predictions on cognitive and emotional
behaviors could be predicted by observing the levels of change of oxygen in different areas of
the brain. This opens up new areas of exploration to measure different behaviours, such as
resting states. However, task-based states such as movie watching have been measured to
yield even more accurate predictions for cognitive and behavioral domains. (Finn & Bandettini,
n.d.). In this project, we have built a deep learning model that is able to predict
with even higher accuracy behavioral states and actions based on fMRI data.The deep learning model focuses on maximising prediction accuracy and improves on the
previous PCM linear model used to predict behavioral scores. The project utilizes deep learning architectures such as Convolutional Neural Networks to
analyse different prediction accuracy and performance, and to conclude on the best deep
learning architecture which is suitable for predicting behavioral scores.</p>
<Image src="/cpm.png" alt="asd" width="300" height="600" style={{marginTop: 20, marginBottom: 20}}/>
<p>Individual patterns of whole-brain functional connectivity are distinctive and stable enough to be able to serve as a unique identifier across
people for their time and brain states. By extracting the features of these patterns, we have
the ability to predict sustained attention, intelligence and personality traits among people.
The organization and inter-relationship of spatially separated brain regions are reflected by
functional connectivity (Yuhui Du, Zening Fu, & Calhoun., 2018). It is measured as the
statistical dependence between the neuroimaging signal time series in spatially distinct brain
regions. The changes in consciousness states are related to changes in functional connectivity.
By altering brain functional connectivity, we can obtain potential biomarkers to classify and
predict brain disorders and behaviors.
There is a growing consensus such that models that are based on individuals’ distinctive
patterns of static functional brain connectivity (SFC) could predict their differences in abilities,
which includes sustained attention, fluid intelligence and working memory. Methods to
measure and delineate functional connectivity might cause great effect in identifying
biomarkers and the accuracy of predicting an individual subject. Functional connectivity is
often presumed to be stationary over the scanning time and the static functional connectivity
(SFC) analysis is carried out in the previous fMRI studies. The diagram below shows the
primary functional connectivity analysis methods and potential connectivity measures that
can be used in classification and prediction.</p>
<Image src="/analysis.png" alt="asd" width="300" height="600" style={{marginTop: 20, marginBottom: 20}}/>
<p>The static functional connectivity (SFC) is different from dynamic functional connectivity such
that it uses the entire neuroimaging-signal time series, providing a single measure of
functional brain architecture. The connectome-based predictive model (CPM) also known as
the sustained attention CPM, has done prediction on individuals’ sustained attention function
from the functional connectivity that are measured during rest and five other different tasks
by generalizing six independent datasets (Rosenberg, Scheinost, Greene, Avery, Kwon, Finn,
Ramani, Maolin Qiu, Constable, & Chun., 2020). In previous work, the sustained attention
CPM has predicted differences in sustained attention function among individuals. 
Either taskbased or resting-state functional connectivity could generate these predictions.</p>

<h3>Convolutional Neural Networks</h3>
<p>
Deep neural networks such as convolutional neural networks (CNN) have much success in task
prediction on medical image data (Cireşan et al., 2012, 2013; Roth et al) and have been shown
to correctly classify brain task-based states using BOLD time series with an accuracy of 93.7%
on seven-class classification tasks (emotion, gambling, language, motor, relational, social,
working memory), from Xiaoxiao, Xiao Liang’s research. Convolutional neural networks’
structure allows the learning of more complex output functions compared to traditional
machine learning models, and can be trained end to end (Xiaoxiao Wang, Xiao Liang, 2020, #),
while also reducing the risk of overfitting. From these attributes, convolutional neural
networks can be suitable for classification problems involving fMRI time series without
feature selection. Another proposed CNN by (Jeremy Kawaharaa,1, Colin J. Browna,1, Steven
P. Millerb, Brian G. Bootha, Vann Chaub, Ruth E. Grunauc, Jill G. Zwickerc, Ghassan Hamarneh,
2017, #), BrainNetCNN, specializes in handling connectome network data to predict clinical
neurodevelopmental outcomes. BrainNetCNN comprises of convolutional filters such as
edge-to-edge, edge-to-node and node-to-graph layers which leverages on the topological
property inherent in brain network’s structure to output feature maps that identifies certain
features from the input. Convolutional neural networks such as BrainNetCNN also prove to
be adaptable when there are few instances available, a common issue when dealing with
neuroimaging data. The weights are shared between layers, thus reducing the number of free
parameters to learn, compared to fully connected neural networks. Research done on BayelyIII motor prediction using BrainNetCNN on 168 preterm infant brain networks has shown to
be accurate in predicting scores 18 months into the future.
</p>
<p>
However, cognitive score prediction is shown to perform more poorly compared to motor
score prediction by using the Pearson correlation coefficient as measurement and using
different configurations of BrainNetCNN (FC90net, E2Enet-sml), therefore cognitive and
emotion components in task-based prediction using movie watching may be predicted with
lesser accuracy. Furthermore, other research works involving other neural network
architectures has shown results that BrainNetCNN did not outperform nor meet the expected
accuracies for behavioral prediction.
</p>
<Image src="/score.png" alt="asd" width="200" height="500" style={{marginTop: 20, marginBottom: 20}}/>
<p>
For instance, in a research by Tong He, Ru Kong (Tong He & Ru Kong, 2018, #), Fully Connected
Neural Network (FNN) outperforms both BrainNetCNN and Graph Convolutional Neural
Network (GCNN) and also kernel regression when predicting fluid intelligence in rest-based
states. This is evident that classic neural networks such as FNN are able to outperform deep
neural networks and machine learning models such as kernel regression, and no deep neural
networks outperformed the kernel regression in predicting fluid intelligence. However, these
results only apply to resting state fMRI datasets. Furthermore, there is no performance
difference between kernel regression and DNNs, but Tong He/Ry Kong’s research claims that
further tuning in DNNs could potentially improve the overall performance with greater
difficulty.
</p>
    </MainContainer>
  )
}
