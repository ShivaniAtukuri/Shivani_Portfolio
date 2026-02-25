import React from 'react';
import Skills from './Skills';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'CommunityHub-360',
      technologies: ['Java', 'Android Studio', 'React', 'HTML5 / CSS3', 'Node.js', 'MongoDB', 'Amazon EC2', 'Git'],
      highlights: [
        'Designed and architected a scalable full-stack web platform to address safety and communication gaps in residential communities, implementing a microservices-based architecture with RESTful APIs and role-based access control (RBAC) to ensure secure, seamless interactions between residents, security personnel, and administrators ',
        'Engineered and deployed the application on Amazon Web Services, leveraging services such as EC2, RDS, S3, and IAM to ensure high availability, data security, and reliable performance across multiple community networks',
        'Built CI/CD pipelines using GitHub Actions and AWS CodePipeline, reducing release cycles by 30% and improving deployment reliability',
        'Collaborated with cross-functional teams in Agile/Scrum environments, participating in sprint planning, daily stand-ups, and retrospectives to deliver incremental features efficiently and align development with community needs',
      ],
      
    },
    
    {
      title: 'Leaf Disease Prediction',
      technologies: ['Python', 'CNNs', 'Image Classification', 'AlexNet'],
      highlights: [
        'Developed a deep learning–based plant disease detection system to enable early crop diagnosis, implementing Convolutional Neural Networks (CNNs) with transfer learning using AlexNet to accurately classify leaf diseases',
        'Benchmarked the CNN model against classical machine learning algorithms such as SVM and Random Forest, achieving 94% classification accuracy and outperforming traditional methods by 18%',
        'Addressed limited dataset size and overfitting by applying image preprocessing and data augmentation techniques (rotation, flipping, contrast adjustment, normalization), improving model generalization by 15% on unseen validation data',
        'Optimized training performance through hyperparameter tuning, dropout regularization, and early stopping, while visualizing model performance using confusion matrices and accuracy-loss curves to ensure robust and reliable predictions',
      ],
      link: 'https://github.com/ShivaniAtukuri/Flask-app',
    },
    {
      title: 'Weapon Detection in Real-Time CCTV',
      technologies: ['CNNs', 'YOLOv3', 'YOLOv4', 'VGG16', 'PyTorch', 'Computer Vision'],
      highlights: [
        'Developed a real-time weapon detection system for CCTV surveillance, leveraging YOLOv3/v4 and OpenCV for live video processing, enabling instant alerts and improving public safety with under 100ms detection latency',
        'Achieved 92% detection accuracy by training and fine-tuning the YOLO models on a custom dataset of weapons, while implementing techniques like non-max suppression and bounding box optimization to reduce false positives',
        'Conducted a comparative analysis of YOLO models versus VGG16 for object detection, balancing speed and accuracy to achieve real-time performance at 30 FPS suitable for live monitoring scenarios',
        'Integrated Stripe payment processing with webhook validation and transaction logging',
        'Metrics: 99.9% uptime, <200ms API response time (p95)',
      ],

    },
  ];
    
  
}
export default Projects;
